import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/SavedResult";
// import { Input, TextArea, FormBtn } from "../components/SearchForm";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"

class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    //function for search entry

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        //connect to googlebooks API
        API.getGoogleBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    let results = res.data.items
                    results = results.map(result => {
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
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
            </div>

            <Container fluid>
                {/* <Jumbotron>
          {/* <h1>Search for and Save Books of Interest</h1> */}
                {/* </Jumbotron> */}
                <Container />
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
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton}
                    />
                </Container>
            </Container>
        )
    }
}

export default SearchBooks;
