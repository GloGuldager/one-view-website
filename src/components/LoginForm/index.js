import React from "react";
import "./LoginForm.css";
// This file exports the Input, TextArea, and FormBtn components

const LoginForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="LoginLabel"><h3>Login to Save Results</h3></label>
                <br></br>
                <h4>Enter a Username and Password to Save and Access Results</h4>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="username"
                    placeholder="Enter a username"
                    onChange={props.handleInputChange}
                />
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="password"
                    placeholder="Enter a password"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn submit" onClick={props.handleFormSubmit}>
                Submit
          </button>
        </form>
    )
}

export default LoginForm