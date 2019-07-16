import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/SavedResult";
// import { Input, TextArea, FormBtn } from "../components/SearchForm";
import LoginForm from "../components/LoginForm";
// import SearchResult from "../components/SearchResult"

class Login extends Component {
  state = {
    username: "",
    password: ""
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
    //connect to googlebooks API
    var url = 'http://localhost:3000/api/signup';
    // var url = 'https://one-view-reviews-api.herokuapp.com/api/post';
    console.log(this.state.username);
    var user = {
      "username": this.state.username,
      "password": this.state.password
    };
    console.log(user);

    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(user), // data can be `string` or {object}!
      // mode: 'cors'
    }).then(response => console.log(response));
    // .then(response => response.json())
      // .then(user => {
      //   console.log(user);
      //   this.setState({
      //     username: "",
      //     password: ""
      //   })
      // });






  }


  render() {
    return (
      <Container fluid>
        <Container>
          <Row>
            <Col size="md-6">
              <LoginForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Login;
