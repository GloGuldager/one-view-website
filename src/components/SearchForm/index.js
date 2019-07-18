import React from "react";
import "./SearchForm.css";
// This file exports the Input, TextArea, and FormBtn components

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="ReviewSearchLabel"><h3>Search Product Reviews</h3></label>
                <br></br>
                <h4>Use keywords for features you care about and let IBM Watson do the rest to return reviews and analysis tailored to your needs.</h4>
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
                    placeholder="Enter a keyword (optional)"
                    onChange={props.handleInputChange}
                />
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="keyword2"
                    placeholder="Enter a 2nd keyword (optional)"
                    onChange={props.handleInputChange}
                />
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="keyword3"
                    placeholder="Enter a 3rd keyword (optional)"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn submit" onClick={props.handleFormSubmit}>
                Analyze
          </button>
        </form>
    )
}

export default SearchForm