import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Results() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <article class="content">
              <h1>Results</h1>
              <p>Display Results Here</p>
            </article>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Results;
