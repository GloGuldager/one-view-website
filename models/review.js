const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  reviewText: { 
      type: String,
    required: true },
  // starRating: String,
  // author: String,
  date: { 
    type: Date, 
    default: Date.now 
  },
  reviewTitle: String
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
