import axios from "../AxiosComponent/AxiosComponent.js";
import { Component } from "react";
import estrellas from '../Images/estrellas.jpg';
import './AddReview.css'

class AddReview extends Component{

    state = {
        actualItem: [{
            name: "No name",
            author: "No author",
            description: "No Description",
            image: "No image",
            rating: 0,
        }]
    }

    componentDidMount(){
        axios.get('/Javour02/Libros/books').then(response=>{
            var theBooks = response.data;
            this.setState({
              actualItem: theBooks,
            })
        });
    }

    validate(num){
        if(this.state.actualItem[num] !== undefined){
            return(
                <div className='specific-Info2' >
                        <div className='photo2'>
                            <img className='book-image2' src={this.state.actualItem[num].image}/>
                        </div>
                        <div className='sinopsis2'>
                            <h1>{this.state.actualItem[num].name}</h1>
                            <h3>By {this.state.actualItem[num].author}</h3>
                            <h2>Average Review: {this.state.actualItem[num].rating}</h2>
                            <img className='estrellas' src={estrellas}/>
                            <p className="justifyDesc">{this.state.actualItem[num].description}</p>
                        </div>
                </div>
            );
        }else{
            return(
                <div className='specific-Info2' >
                        <div className='photo2'>
                            <img className='book-image2' src={this.state.actualItem[0].image}/>
                            <div className='rating'>
                                Rate this book
                                <img className='estrellas' src={estrellas}/>
                            </div>
                            <button>
                                Write a review
                            </button>
                        </div>
                        <div className='sinopsis2'>
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
            <div className="allReview">
                {this.validate(6)}
                <div className="addReview">
                    <h3>Write your Review</h3>
                    <textarea name="comentarios" rows="5" cols="120"></textarea>
                    <button className="botonSubmitReview">Submit Review</button>
                </div>
            </div>
        );
    }
}

export default AddReview;