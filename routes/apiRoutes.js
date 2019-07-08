// Require all models
const db = require("../models");

const cors = require("cors");

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const Watson = require("../lib/nlu");
const watson = new Watson();

const Scrape = require("../lib/scrape");
const scrape = new Scrape();

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

module.exports = function (app) {

    // A GET route for scraping the amazon page
    // app.get("/api/scrape", function (req, res) {

    //     let totalReviewCount = 0;
    //     let averageStarRating = 0;
    //     let ASIN = "B07TD89MX1"; // ideally data from the front-end... EVENTUALLY!

    //     scrape.scrapeTotalReviews(totalReviewCount, averageStarRating, ASIN)

    //     // Redirect to see the json with all the reviews and data
    //     res.redirect("/api/reviews");
    // });


    // Route for getting all Reviews from the db
    app.get("/api/reviews", function (req, res) {
        // grabs all of the reviews
        db.Review.find({})
            .then(function (reviews) {
                res.json(reviews);
            })
            .catch(function (error) {
                res.json(error);
            });
    });

    app.post("/api/post", cors(), urlencodedParser, function (req, res) {
        console.log("post successful");

        console.log(req.body); // { '{"ASIN":"B07DH7FNSV"}': '' }  


        let totalReviewCount = 0;
        let averageStarRating = 0;
        let ASIN = req.body.ASIN;
        let keywordString;
        let keywordArray;
        let keyword1;
        let keyword2;
        let keyword3;

        if (req.body.keywords) {
            keywordString = req.body.keywords;
            keywordArray = keywordString.split(',');
            if (keywordArray.length === 3) {
                keyword1 = keywordArray[0];
                keyword2 = keywordArray[1];
                keyword3 = keywordArray[2];
            } else if (keywordArray.length === 2) {
                keyword1 = keywordArray[0];
                keyword2 = keywordArray[1];
            } else if (keywordArray.length === 1) {
                keyword1 = keywordArray[0];
            }
        }
        
        console.log(`ASIN: ${ASIN}`);
        console.log(`keyword1: ${keyword1}, keyword2: ${keyword2}, keyword3: ${keyword3}`);


        scrape.scrapeTotalReviews(totalReviewCount, averageStarRating, ASIN, function(results) {
            console.log(`results: ${results}`);
            res.json({"message": results});
        });
        // res.json({"message": "hello"});        
    });

       // Route for getting all analyzing reviews using Watson
       app.get("/api/analyze", function (req, res) {


    });

    // Route for deleting all Reviews from the db
    app.delete("/api/reviews", function (req, res) {
        // grabs all of the reviews to delete
        db.Review.deleteMany()
            .then(function (reviews) {
                res.json(reviews);
            })
            .catch(function (error) {
                res.json(error);
            });
    });

    // Route to get only saved reviews
    app.get("/api/reviews/saved", function (req, res) {
        db.Review.find({ saved: true })
            .then(function (reviews) {
                res.json(reviews);
            })
            .catch(function (error) {
                res.json(error);
            });
    });


    app.put("/reviews/saved/:id", function (req, res) {
        // changes unsaved to saved (or vice verse)
        db.Review.findOneAndUpdate({ _id: req.params.id }, { saved: false }, { new: true })
            .then(function (reviews) {
                res.json(reviews);
            })
            .catch(function (error) {
                res.json(error);
            });
    });

    app.get("/reviews/saved/:id", function (req, res) {
        // grabs all of the reviews
        db.Review.findOne({ _id: req.params.id })
            .then(function (reviews) {
                res.json(reviews);
            })
            .catch(function (error) {
                res.json(error);
            });
    });

};
