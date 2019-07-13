import React from "react";
import "./SearchForm.css";
// This file exports the Input, TextArea, and FormBtn components

const SearchForm = props => {
  return (
      <form>
          <div className="form-group">
              <label className="BookSearchLabel"><h3>Search For A Product</h3></label>
              <br></br>
              <input className="col-12 form-control"
                  value={props.search}
                  type="text"
                  name="ASIN"
                  placeholder="Enter a Product's ASIN"
                  onChange={props.handleInputChange}
              />
              <input className="col-12 form-control"
                  value={props.search}
                  type="text"
                  name="keyword1"
                  placeholder="Enter a keyword"
                  onChange={props.handleInputChange}
              />
              <input className="col-12 form-control"
                  value={props.search}
                  type="text"
                  name="keyword2"
                  placeholder="Enter a 2nd keyword"
                  onChange={props.handleInputChange}
              />
              <input className="col-12 form-control"
                  value={props.search}
                  type="text"
                  name="keyword3"
                  placeholder="Enter a 3rd keyword"
                  onChange={props.handleInputChange}
              />
          </div>
          <button type="submit" className="submitBtn submit" onClick={props.handleFormSubmit}>
              Submit
          </button>
      </form>
  )
}

export default SearchForm