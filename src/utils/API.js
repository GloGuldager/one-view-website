import axios from "axios";

export default {
  // Gets all books
  getResults: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  },

  // Gets all reviews
  getReviews: function () {
    return axios.get("/api/reviews");
  },

  // Gets the book with the given id
  getReview: function (id) {
    return axios.get("/api/reviews/" + id);
  },
  // Deletes the book with the given id
  deleteReview: function (id) {
    return axios.delete("/api/reviews/" + id);
  },
  // Save results to the database
  saveResult: function (savedResults) {
    return axios.post("/api/saved", savedResults);
  }
};
