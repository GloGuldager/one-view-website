import React from "react";
import "./style.css";
import { Row, Col } from "../Grid"

// This file exports both the List and ListItem components
const SavedResult = props => {
    return (props.savedReviews.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Reviews that You Saved</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Reviews that You Saved</h3>
                        {props.savedReviews.map(savedreview => {
                            return (
                                <li className="saved-list list-group-item">
                                    <Row className="SearchResult" id={savedreview.title + "Card"} key={savedreview._id}>
                                        {/* col-3 show image of the book */}
                                        {/* <Col size="2" className="bookImage">
                                            <img src={savedbook.image} alt={savedbook.title} />
                                        </Col> */}
                                        <Col size="1" className="emptyCol" />
                                        {/* col-9 show information of the book */}
                                        <Col size="9" className="reviewInfo">
                                            <Row>
                                                <h2 className="reviewTitle">{savedreview.title}</h2>
                                            </Row>
                                            {/* <Row>
                                                <h3 className="reviewAuthor">{savedreview.authors}</h3>
                                            </Row> */}
                                            <Row>
                                                <p className="reviewDescription">{savedreview.description}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row className="buttonDiv ">
                                        <button className="deleteReview btn btn-default delete" id={savedreview._id} onClick={() => props.handleDeleteButton(savedreview._id)}>
                                            Delete Review
                                  </button>
                                        {/* <a href={savedbook.link} target="_blank">
                                            <button className="viewBook btn btn-default view">
                                                View Book */}
                                        {/* </button> */}
                                        {/* </a> */}
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SavedResult
