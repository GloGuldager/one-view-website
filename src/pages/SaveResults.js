import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import SavedResult from "../components/SavedResult"

class SaveResult extends Component {
  state = {
    savedResults: []
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getResults()
      .then(res => this.setState({ savedResults: res.data }))
      .catch(err => console.log(err))
  }

  handleDeleteButton = id => {
    API.deleteResult(id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err))
  }


  render() {
    return (
      <Container fluid>
        <Container>
          {/* <SavedResult savedResults={this.state.savedResults} handleDeleteButton={this.handleDeleteButton} /> */}

        </Container>
      </Container>
    );
  }
}

export default SaveResult;
