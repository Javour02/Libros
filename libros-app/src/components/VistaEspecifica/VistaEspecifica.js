import React from 'react';
import estrellas from '../Images/estrellas.jpg';
import Comment from '../Comment/Comment.js';
import './VistaEspecifica.css';
import UserCard from '../UserCard/UserCard';
import { useParams } from 'react-router-dom';


var VistaEspecifica = (props) => {
    console.log(props);
    var {bookIndex} = useParams();
    var viewBook = props.viewBook(bookIndex);
    /*state = {
        actualItem:[{
            name: "No name",
            author: "No author",
            description: "No Description",
            image: "No image",
            rating: 0,

        }],
        comments:[],
        users:[]
    }

    componentDidMount(){
        axios.get('/Javour02/Libros/books').then(response=>{
            var theBooks = response.data;
            this.setState.books({
              actualItem: theBooks,
            })
            axios.get('/Javour02/Libros/comments').then(response=>{
                var theComments = response.data;
                var bookComments = []
                theComments.forEach(element => {
                    //if(comment.idBook = this.state.actualItems.id){
                        //bookComments.push(element);
                    //}
                });
                this.setState({
                comments : theComments,
                })
                console.log(theComments);
            })
        });
        axios.get('/Javour02/Libros/sellUsers').then(response=>{
            var theUsers = response.data;
            this.setState({
              users: theUsers,
            })
        });
        console.log(this.state);
        
    }

    validateImage(num){
        if(this.state.actualItem[num] !== undefined){
            return(this.state.actualItem[num].image);
        }else{
            return(this.state.actualItem[0].image);
        }
    }

    validate(num){
        if(this.state.actualItem[num] !== undefined){
            return(
                <div className='specific-Info-Specific-View' >
                        <div className='photo-Specific-View'>
                            <img className='book-image-Specific-View' src={this.state.actualItem[num].image}/>
                            <div className='rating'>
                                Rate this book
                                <img className='estrellas' src={estrellas}/>
                            </div>
                            <button className='buttonAddReviewSpecificView'>
                                Write a review
                            </button>
                        </div>
                        <div className='sinopsis'>
                            <h1>{this.state.actualItem[num].name}</h1>
                            <h3>By {this.state.actualItem[num].author}</h3>
                            <h2>Average Review: {this.state.actualItem[num].rating}</h2>
                            <img className='estrellas' src={estrellas}/>
                            <p>{this.state.actualItem[num].description}</p>
                        </div>
                </div>
            );
        }else{
            return(
                <div className='specific-Info-Specific-View' >
                        <div className='photo'>
                            <img className='book-image' src={this.state.actualItem[0].image}/>
                            <div className='rating'>
                                Rate this book
                                <img className='estrellas' src={estrellas}/>
                            </div>
                            <button className='buttonAddReviewSpecificView'>
                                Write a review
                            </button>
                        </div>
                        <div className='sinopsis'>
                            <h1>{this.state.actualItem[0].name}</h1>
                            <h3>By {this.state.actualItem[0].author}</h3>
                            <h2>Average Review: {this.state.actualItem[0].rating}</h2>
                            <img className='estrellas' src={estrellas}/>
                        </div>
                        <button>
                            Write a review
                        </button>
                    </div>
                    <div className='sinopsis'>
                        <h1>Titulo</h1>
                        <h3>By Jorge Sambrano</h3>
                        <h2>Average Review</h2>
                        <img className='estrellas' src={estrellas}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            );
        } 
    }*/
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