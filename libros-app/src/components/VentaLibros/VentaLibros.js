import React, { Component } from 'react';
import portada from '../Images/Portada.png';
import axios from '../AxiosComponent/AxiosComponent.js'
import './VentaLibros.css';
import usuario from '../Images/usuario-de-perfil.png';
import ImageButton from '../ImageButton/ImageButton.js';
import UserCard from '../UserCard/UserCard.js';

class ventaLibros extends Component {
    state = {
        actualItem:[{
            name: "No name",
            author: "No author",
            image: "No image"
        }],
        actualSeller:[{
            name: "No User",
            info: "No info",
            price: 0,
            image: ":(",
            type: "No type"
        }]
    }

    componentDidMount(){
        let book = localStorage.getItem('currentBook');
        axios.get('/Javour02/Libros/books').then(response=>{
            var theBooks = response.data;
            this.setState({
              actualItem: theBooks,
            })
        });
        axios.get('/Javour02/Libros/sellUsers').then(response=>{
            var users = response.data;
            this.setState({
                actualSeller: users,
            })
        });
    }

    render(){
        return(
            <div className='ventaLibros'>
                <div className='titulo'>
                    <div className='nombreLibro'>
                        <h1 className='marginTitle'>{this.state.actualItem[0].name}</h1>
                        <h2>{this.state.actualItem[0].author}</h2>
                    </div>
                    <button className='buttonVenta'>
                        {this.state.actualSeller[0].type} button
                    </button>
                </div>
                <div className='librosScroll'>
                    {this.state.actualItem.map(item=>{
                        return(<ImageButton img={item.image}/>)
                    })}
                </div>
                <UserCard type={this.state.actualSeller[0].type} image={this.state.actualSeller[0].image} name={this.state.actualSeller[0].name} info={this.state.actualSeller[0].info} price={this.state.actualSeller[0].price}/>
            </div>
        );
    }
    
}

export default ventaLibros;