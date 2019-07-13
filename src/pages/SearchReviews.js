import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/SavedResult";
import { Input, TextArea, FormBtn } from "../components/SearchForm";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"

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
        }).then(response => {
            console.log(response);
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
        console.log(this.state.books)
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>

                <div class="wrapper">
                    <header class="main-head">The header</header>
                    <nav class="main-nav">
                        <ul>
                            <li><a href="">Nav 1</a></li>
                            <li><a href="">Nav 2</a></li>
                            <li><a href="">Nav 3</a></li>
                        </ul>
                    </nav>
                    <article class="content">
                        <h1>Main article area</h1>
                        <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
                    </article>
                    <aside class="side">Sidebar</aside>
                    <div class="ad">Advertising</div>
                    <footer class="main-footer">The footer</footer>
                </div >


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
                    {/* <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} */}
                </Container>
            </div>

        )
    }
}

export default SearchReviews;
