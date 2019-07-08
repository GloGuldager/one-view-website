// Require all models
const db = require("../models");

// Require axios to make the AJAX call
const axios = require("axios");

// Require cheerio for scraping the website
const cheerio = require("cheerio");

const Watson = require("./nlu");
const watson = new Watson();

class Scrape {

    scrapeTotalReviews(totalReviewCount, averageStarRating, ASIN) {
            // First, we grab the total number of reviews with axios
            axios.get("https://www.amazon.com/product-reviews/" + ASIN + "/ref=cm_cr_arp_d_viewopt_srt?ie=UTF8&pageNumber=1&sortBy=recent")
                .then(response => {

                    // Then, we load that into cheerio and save it to $ for a shorthand selector
                    var $ = cheerio.load(response.data);

                    $(".a-fixed-left-grid").each(function (i, element) {
                        if ($(this).find(".totalReviewCount").text()) {
                            totalReviewCount = $(this).find(".totalReviewCount").text();
                        }
                        if ($(this).find(".averageStarRating").text()) {
                            averageStarRating = $(this).find(".averageStarRating").text();
                        }
                        console.log(`totalReviews: ${totalReviewCount}`)
                        console.log(`Average Star Rating: ${averageStarRating}`)
                    });
                    
                }).then(response => { return this.scrapeReviews(totalReviewCount, ASIN) })
                .catch(err => console.log(err));
    }


    scrapeReviews(totalReviewCount, ASIN) {

        let amazonReviewText = [];
        let numReviews = 0;
        let amazonRating = [];
        let amazonAuthor = [];
        let amazonReviewDate = [];
        let amazonReviewTitle = [];

        console.log(`total num of pages: ${Math.ceil(totalReviewCount / 10)}`);

        // Loop through all the pages of reviews
        for (let page = 1; page <= (Math.ceil(totalReviewCount / 10)); page++) {

            let queryURL = "https://www.amazon.com/product-reviews/" + ASIN + "/ref=cm_cr_arp_d_viewopt_srt?ie=UTF8&pageNumber=" + page + "&sortBy=recent";

            axios.get(queryURL).then((response) => {

                var $ = cheerio.load(response.data);

                $(".review-text").each(function (i, element) {
                    // Push to an empty array
                    if ($(this).text().trim()) {
                        amazonReviewText.push($(this).text().trim());
                    }
                    numReviews++;
                    // console.log(`Total reviews added: ${numReviews}`);

                });

                $(".review-date").each(function (i, element) {
                    // Push to an empty array
                    if ($(this).text().trim()) {
                        amazonReviewDate.push($(this).text().trim());
                    }
                });

                $(".review-title").each(function (i, element) {
                    // Push to an empty array
                    if ($(this).text().trim()) {
                        amazonReviewTitle.push($(this).text().trim());
                    }
                });

                $(".review-rating").each(function (i, element) {
                    // Push to an empty array
                    if ($(this).text().trim()) {
                        amazonRating.push($(this).text().trim());
                    }
                });

                $(".a-profile-name").each(function (i, element) {
                    // Push to an empty array
                    if ($(this).text().trim()) {
                        amazonAuthor.push($(this).text().trim());
                    }
                });

                if (numReviews === parseInt(totalReviewCount)) {
                    return this.deleteAllInMongo(amazonReviewText, amazonReviewDate, amazonReviewTitle, numReviews);
                }

            }).catch(err => console.log(err));

        }
    }

    deleteAllInMongo(amazonReviewText, amazonReviewDate, amazonReviewTitle, numReviews) {
        // grabs all of the reviews to delete
        db.Review.deleteMany()
            .then((reviews) => {
                console.log("All deleted");
                return this.inputReviewInMongo(amazonReviewText, amazonReviewDate, amazonReviewTitle, numReviews);
            })
            .catch(error => {
                console.log(error);
            });
    }

    inputReviewInMongo(amazonReviewText, amazonReviewDate, amazonReviewTitle, numReviews) {
        console.log("inside input review function");

        let numDocuments = 0;
        var reviewStr = '';
        //  Create a new document in Mongo by creating a `result` object built from scraping
        for (let i = 0; i < amazonReviewText.length; i++) {
            let result = {
                reviewText: amazonReviewText[i],
                // starRating: amazonRating[i],
                // author: amazonAuthor[i],
                date: amazonReviewDate[i],
                reviewTitle: amazonReviewTitle[i]
            };

            db.Review.create(result)
                .then(response => {
                    // console.log("Created!")
                })
                .catch(function (err) {
                    // If an error occurred, log it
                    console.log(err);
                });

            reviewStr += ' ' + amazonReviewText[i] + ' ' + amazonReviewTitle[i];
            numDocuments++;

        }

        if (parseInt(numReviews) === parseInt(numDocuments)) {
            console.log("about to run watson analysis");
            watson.analyzeReviews(reviewStr, function (analysis) {
                return analysis;
                console.log(analysis);
            })
        }


    }
}

module.exports = Scrape