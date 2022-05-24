import React from 'react';
import estrellas from '../../Images/estrellas.jpg';
import Comment from '../../components/Comment/Comment.js';
import './SpecificView.css';
import UserCard from '../../components/UserCard/UserCard';
import { useParams } from 'react-router-dom';


var VistaEspecifica = (props) => {
    console.log(props);
    var {bookIndex} = useParams();
    var viewBook = props.viewBook(bookIndex);
    
    return viewBook ? (
        <div className='vistaEspecifica'>
            <div className='content-specific-view'>
                <div className='specific-Info-Specific-View' >
                    <div className='photo-Specific-View'>
                        <img className='book-image-Specific-View' src={viewBook.image} />
                        <div className='rating'>
                            Rate this book
                            <img className='estrellas' src={estrellas} />
                        </div>
                        <button className='buttonAddReviewSpecificView'>
                            Write a review
                        </button>
                    </div>
                    <div className='sinopsis'>
                        <h1>{viewBook.name}</h1>
                        <h3>By {viewBook.author}</h3>
                        <h2>Average Review: {viewBook.rating}</h2>
                        <img className='estrellas' src={estrellas} />
                        <p>{viewBook.description}</p>
                    </div>
                </div>
                <div className='Comments'>
                    <h2>Comentarios: </h2>
                    {props.comments.map((com) => {
                        return (<Comment name={com.name} image={com.image} comment={com.comment} />)
                    })}
                </div>
                
            </div>
            <div className='sidebar'>
                {props.users.map((user) => {
                    return (<UserCard type={user.type} image={user.image} name={user.name} info={user.info} price={user.price} />)
                })}
            </div>
        </div>
    ): null;
};

export default VistaEspecifica;