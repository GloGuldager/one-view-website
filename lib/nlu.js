const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');
require('dotenv');
// Require all models
const db = require("../models");


let nlu;

if (process.env.NATURAL_LANGUAGE_UNDERSTANDING_IAM_APIKEY
  && process.env.NATURAL_LANGUAGE_UNDERSTANDING_IAM_APIKEY !== '') {
  nlu = new NaturalLanguageUnderstandingV1({
    version: '2018-11-16',
    url: process.env.NATURAL_LANGUAGE_UNDERSTANDING_URL || 'https://gateway.watsonplatform.net/natural-language-understanding/api',
    iam_apikey: process.env.NATURAL_LANGUAGE_UNDERSTANDING_IAM_APIKEY || '<iam_apikey>',
    iam_url: process.env.ASSISTANT_IAM_URL || 'https://iam.bluemix.net/identity/token',
  });
} else {
  nlu = new NaturalLanguageUnderstandingV1({
    version: '2018-11-16',
    url: process.env.NATURAL_LANGUAGE_UNDERSTANDING_URL || 'https://gateway.watsonplatform.net/natural-language-understanding/api',
    username: process.env.NATURAL_LANGUAGE_UNDERSTANDING_USERNAME || '<username>',
    password: process.env.NATURAL_LANGUAGE_UNDERSTANDING_PASSWORD || '<password>',
  });
}



// const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
//     version: '2018-11-16',
//     iam_apikey: process.env.NLU_IAM_APIKEY,
//     url: process.env.NLU_URL
// });

class nluWatson {

    analyzeReviews(textToAnalyze, keyword1, keyword2, keyword3) {
        return new Promise((resolve, reject) => {
            console.log("inside analyzeReviews of nluWatson Class");
            const analyzeParams = {
                // 'url': 'http://one-view-reviews-api.herokuapp.com/api/reviews',
                'text': textToAnalyze,
                'features': {
                    'sentiment': {
                        'targets': [
                            'score'
                        ],
                        'document': {
                            'score': true,
                            'label': true
                        },
                    },
                    // 'categories': {
                    //     'emotion': true,
                    //     'sentiment': true,
                    //     'limit': 3
                    // },
                    // 'concepts': {
                    //     'emotion': true,
                    //     'sentiment': true,
                    //     // 'limit': 3
                    // },
                    'emotion': {
                        'targets': [
                            keyword1,
                            keyword2,
                            keyword3
                        ]
                    },
                    // 'entities': {
                    //     'emotion': true,
                    //     'sentiment': true,
                    //     //   'limit': 1
                    // },
                    'keywords': {
                        'sentiment': true,
                        'emotion': true,
                        //   'limit': 3
                    }
                }
            };

            nlu.analyze(analyzeParams, function (err, response) {
                if (err) {
                    console.log(`err : ${err}`);
                    reject(err);
                } else {
                    resolve(response);
                    db.Analysis.create(response);
                    console.log(JSON.stringify(response, null, 2));
                }
            });
        });
    }
}

module.exports = nluWatson;

