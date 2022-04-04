import React, { Component } from 'react';
import portada from '../Images/Portada.png';
import axios from '../AxiosComponent/AxiosComponent.js'
import './VentaLibros.css';
import usuario from '../Images/usuario-de-perfil.png';
import ImageButton from '../ImageButton/ImageButton.js';

class ventaLibros extends Component {
    state = {
        actualItem:[],
        actualSeller:[{
            name: "No User",
            info: "No info",
            price: 0
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
                        <h1>Book Name</h1>
                        <h2>By: Book autor</h2>
                    </div>
                    <button className='buttonVenta'>
                        Buy button
                    </button>
                </div>
                <div className='librosScroll'>
                    {this.state.actualItem.map(item=>{
                        return(<ImageButton img={item.image}/>)
                    })}
                </div>
                <div className='vendedor'>
                    <img className='logoUsuario' src={usuario}/>
                    <h1>{this.state.actualSeller[0].name}</h1>
                    <button className='buttonVenta'>Chat button</button>
                </div>
                <div className='info'>
                    <h2>Book price = {this.state.actualSeller[0].price}</h2>
                    <p>{this.state.actualSeller[0].info}</p>
                </div>
            </div>
        );
    }
    
}

export default ventaLibros;