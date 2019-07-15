import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/SavedResult";
// import { Input, TextArea, FormBtn } from "../components/SearchForm";
import SearchForm from "../components/SearchForm";
// import SearchResult from "../components/SearchResult"

class SearchReviews extends Component {
    state = {
        ASIN: "",
        keyword1: "",
        keyword2: "",
        keyword3: "",
        analysis: {},
        matchedReviews: {}
    };

    //function for search entry

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }


    handleFormSubmit = event => {
        event.preventDefault();
        let keywords = [];
        if (this.state.keyword1) {
            keywords.push(this.state.keyword1);
        }
        if (this.state.keyword2) {
            keywords.push(this.state.keyword2);
        }
        if (this.state.keyword3) {
            keywords.push(this.state.keyword3);
        }
        var url = 'http://localhost:3000/api/post';
        // var url = 'https://one-view-reviews-api.herokuapp.com/api/post';
        console.log(this.state.ASIN);
        var data = {
            "ASIN": this.state.ASIN,
            "keywords": keywords
        };
        console.log(data);

        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data), // data can be `string` or {object}!
            // mode: 'cors'
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    ASIN: "",
                    keyword1: "",
                    keyword2: "",
                    keyword3: ""
                })
            });
    }

    handleSavedButton = event => {
        event.preventDefault();
        console.log(this.state.reviews)
        let savedReviews = this.state.reviews.filter(review => review.id === event.target.id)
        savedReviews = savedReviews[0];
        API.saveReview(savedReviews)
            .then(this.setState({ message: alert("Your review is saved") }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            // <div>

            <div class="wrapper">

                <Container>
                    <Row>
                        <Col size="md-6">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    {/* <SearchResult reviews={this.state.reviews} handleSavedButton={this.handleSavedButton} */}
                    {/* /> */}
                </Container>
            </div>

        )
    }
}

export default SearchReviews;
