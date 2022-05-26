import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import * as actionCreators from "../../store/actions/";


import Comment from '../../components/Comment/Comment.js';
import Navbar from '../../components/Navbar/Navbar.js';
import './SpecificView.css';
import Stars from '../../components/Stars';

import { useParams } from 'react-router-dom';
import BackPhotoBooks from '../../Images/BackPhotoBooks3.png';


var VistaEspecifica = (props) => {
    console.log(props);
    var {bookIndex} = useParams();
    var viewBook = props.viewBook(bookIndex);
    
    return viewBook ? (
        <div>
            <Navbar />
            <img className='specificView--photo' src={BackPhotoBooks}></img>
            <div className='specificView'>
                <div className='specificView--content'>
                    <div className='specificView--info' >
                        <div className='specificView--infoPhoto'>
                            <img className='specificView--bookPhoto' src={viewBook.image} />
                            <div className='specificView--bookRating'><Stars /></div>
                            <button className='specificView--bookWriteReview'> Write a review </button>
                        </div>
                        <div className='specificView--bookInfo'>
                            <h1 className='specificView--bookName'>{viewBook.name}</h1>
                            <h3 className='specificView--bookAuthor'>By {viewBook.author}</h3>
                            <h4 className='specificView--bookAverageRating'>Average Rating: {viewBook.rating}</h4>
                            <p className='specificView--bookSynopsis'>{viewBook.description}</p>
                            <button className='specificView--bookButton'>Loan later</button>
                            <button className='specificView--bookButton'>Buy later</button>
                        </div>
                    </div>
                    <div className='specificView--comments'>
                        <h2 className='specificView--bookComments'>Comentarios: </h2>
                        {viewBook.comments.map((com) => {
                            return (<Comment name={com.name} image={com.image} comment={com.comment} />)
                        })}
                    </div>

                </div>
            </div>
        </div>
    ): null;
};

export default VistaEspecifica;
/*var SpecificView = (props) => {
    console.log(props);
    var { bookIndex } = useParams();
    var viewBook = props.viewBook(bookIndex);

    return viewBook ? (
        <div>
            <Navbar />
            <img className='specificView--photo' src={BackPhotoBooks}></img>
            <div className='specificView'>
                <div className='specificView--content'>
                    <div className='specificView--info' >
                        <div className='specificView--infoPhoto'>
                            <img className='specificView--bookPhoto' src={viewBook.image} />
                            <div className='specificView--bookRating'><Stars /></div>
                            <button className='specificView--bookWriteReview'> Write a review </button>
                        </div>
                        <div className='specificView--bookInfo'>
                            <h1 className='specificView--bookName'>{viewBook.name}</h1>
                            <h3 className='specificView--bookAuthor'>By {viewBook.author}</h3>
                            <h4 className='specificView--bookAverageRating'>Average Rating: {viewBook.rating}</h4>
                            <p className='specificView--bookSynopsis'>{viewBook.description}</p>
                            <button className='specificView--bookButton'>Loan later</button>
                            <button className='specificView--bookButton'>Buy later</button>
                        </div>
                    </div>
                    <div className='specificView--comments'>
                        <h2 className='specificView--bookComments'>Comentarios: </h2>
                        {props.comments.map((com) => {
                            return (<Comment name={com.name} image={com.image} comment={com.comment} />)
                        })}
                    </div>

                </div>
            </div>
        </div>

    ) : null;
};

export default SpecificView;*/