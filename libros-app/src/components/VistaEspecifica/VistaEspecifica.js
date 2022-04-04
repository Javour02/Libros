import React, { Component } from 'react';
import portada from '../Images/Portada.png';
import estrellas from '../Images/estrellas.jpg';
import axios from '../AxiosComponent/AxiosComponent.js'
import './VistaEspecifica.css';

class vistaEspecifica extends Component{
    state = {
        actualItem:[{
            name: "No name",
            author: "No author",
            description: "No Description",
            image: "No image",
            rating: 0,

        }],
        comments:[{
            idBook: 0,
            name: "No User",
            image: "No image",
            comment: "No comment"
        }]
    }

    componentDidMount(){
        axios.get('/Javour02/Libros/books').then(response=>{
            var theBooks = response.data;
            this.setState({
              actualItem: theBooks,
            })
            axios.get('/Javour02/Libros/comments').then(response=>{
            var theComments = response.data;
                this.setState({
                comments : theComments,
                })
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
                <div className='specific-Info' >
                        <div className='photo'>
                            <img className='book-image' src={this.state.actualItem[num].image}/>
                            <div className='rating'>
                                Rate this book
                                <img className='estrellas' src={estrellas}/>
                            </div>
                            <button>
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
                <div className='specific-Info' >
                        <div className='photo'>
                            <img className='book-image' src={this.state.actualItem[0].image}/>
                            <div className='rating'>
                                Rate this book
                                <img className='estrellas' src={estrellas}/>
                            </div>
                            <button>
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
                <div className='content'>
                    {this.validate(7)}
                    <div className='Comments'>
                        <div className='comment1'>
                            <h2>Person name</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className='sidebar'>
                    <div className='oferta1'>
                        <h2>Person name</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='oferta1'>
                        <h2>Person name</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='oferta1'>
                        <h2>Person name</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='oferta1'>
                        <h2>Person name</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default vistaEspecifica;