import React, { Component } from 'react';
import portada from '../Images/Portada.png';
import axios from '../AxiosComponent/AxiosComponent.js'
import './VentaLibros.css';
import usuario from '../Images/usuario-de-perfil.png';
import ImageButton from '../ImageButton/ImageButton.js';

class ventaLibros extends Component {
    state = {
        actualItem:[],
        actualSeller:[]
    }

    componentDidMount(){
        let book = localStorage.getItem('currentBook');
        axios.get('/Javour02/Libros/books').then(response=>{
            var theBooks = response.data;
            this.setState({
              actualItem: theBooks,
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
                    <h1>Book Owner</h1>
                    <button className='buttonVenta'>Chat button</button>
                </div>
                <div className='info'>
                    <h2>Book price = 00.00$</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        );
    }
    
}

export default ventaLibros;