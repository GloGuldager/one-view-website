const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnalysisSchema = new Schema({
  text: String,
  score: Number,
  label: String,
  relevance: Number,
  sadness: Number,
  joy: Number,
  fear: Number,
  disgust: Number,
  anger: Number,
  count: Number,
});

const Analysis = mongoose.model("Analysis", AnalysisSchema);

module.exports = Analysis;
