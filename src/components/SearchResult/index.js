import React from 'react';
import './style.css';
import { Row, Col } from '../Grid'

// This file exports both the List and ListItem components
function SearchResult(props) {

    return (props.matchedReviews.length !== 0 ? (
        <div>
            <div>
                Sentiment score: {Math.floor(props.analysis.sentiment.document.score * 50 + 50)}
            </div>
            <div>
                Here are your matched reviews:
                {props.matchedReviews.map(review => {
                    return (
                        <div>
                            <li>Title: {review.reviewTitle}</li>
                            <li>Review: {review.reviewText}</li>
                        </div>
                    );
                })}

            </div>
            
        </div>
    ) : (
            <h3>If results are found, they will be displayed here</h3>
        )
    )
}
//  return (props.review.length === 0) ? (
//     <div className='card'>
//         <div className='card-body player'>
//             <div className='article'>
//                 <h3>No Search Results</h3>
//             </div>
//         </div>
//     </div>
// ) : (
//         <div className='card'>
//             <div className='card-body player'>
//                 <div className='article'>
//                     <h3>Search Results</h3>
//                     {props.review.map(review => {
//                         return (
//                             <li className='search-list list-group-item'>
//                                 <Row className='SearchResult row' id={review.title + 'Card'} key={review._id}>
//                                     {/* col-3 show image of the book */}
//                                     {/* <Col size="xs-4 sm-3" className="bookImage">
//                                         <img src={book.image} alt={book.title} />
//                                     </Col> */}
//                                     {/* <Col size="1" className="emptyCol"/> */}
//                                     {/* col-9 show information of the book */}
//                                     <Col size='xs-8 sm-9' className='reviewInfo'>
//                                         <Row>
//                                             <h3 className='reviewTitle'>{review.title}</h3>
//                                         </Row>
//                                         {/* <Row>
//                                             <h4 className="bookAuthor">{book.author}</h4>
//                                         </Row> */}
//                                         <Row>
//                                             <p className='reviewText'>{review.text}</p>
//                                         </Row>
//                                     </Col>
//                                 </Row>
//                                 <br />
//                                 <Row className='buttonDiv'>
//                                     <button className='saveBook btn btn-default saved' id={review.id} onClick={(event) => props.handleSavedButton(event)}>
//                                         Save Review
//               </button>
//                                     <a href={review.link} target='_blank'>
//                                         <button className='viewReview btn btn-default view'>
//                                             View Review
//                 </button>
//                                     </a>
//                                 </Row>
//                             </li>
//                         )
//             })}
//         </div>
//     </div>
// </div>


export default SearchResult
