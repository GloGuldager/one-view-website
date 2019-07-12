import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedResult from "../components/SavedResult"

class SaveBook extends Component {
  state = {
    savedBooks: []
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBooks()
    .then(res => this.setState({ savedBooks: res.data}))
    .catch(err => console.log(err))
  }
  
  handleDeleteButton = id => {
    API.deleteBook(id)
    .then(res => this.componentDidMount())
    .catch(err => console.log(err))
  }
  

  render() {
    return (
      <Container fluid>
        <Container>
          <SavedResult savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />

        </Container>
      </Container>
    );
  }
}

export default SaveBook;
