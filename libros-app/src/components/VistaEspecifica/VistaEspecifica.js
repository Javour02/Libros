import React, { Component } from 'react';
import portada from '../Images/Portada.png';
import estrellas from '../Images/estrellas.jpg';
import axios from '../AxiosComponent/AxiosComponent.js'
import Comment from '../Comment/Comment.js';
import './VistaEspecifica.css';
import UserCard from '../UserCard/UserCard';

class vistaEspecifica extends Component{
    state = {
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
            this.setState({
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
                            <p>{this.state.actualItem[0].description}</p>
                        </div>
                </div>
            );
        } 
    }

    render(){    
        return(
            <div className='vistaEspecifica'>
                <div className='content-specific-view'>
                    {this.validate(7)}
                    <div className='Comments'>
                        <h2>Comentarios: </h2>
                        {this.state.comments.map((com)=>{
                            return(<Comment name={com.name} image={com.image} comment={com.comment}/>)
                        })}
                    </div>
                </div>
                <div className='sidebar'>
                    {this.state.users.map((user)=>{
                        return(<UserCard type={user.type} image={user.image} name={user.name} info={user.info} price={user.price}/>)
                    })}        
                </div>
            </div>
        );
    }
}

export default vistaEspecifica;