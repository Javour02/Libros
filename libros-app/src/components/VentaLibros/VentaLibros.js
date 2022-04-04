import React from 'react';
import portada from '../Images/Portada.png';
import './VentaLibros.css';
import usuario from '../Images/usuario-de-perfil.png';

const ventaLibros = () =>{
    return(
        <div className='ventaLibros'>
            <div className='titulo'>
                <div className='nombreLibro'>
                    <h1>Book Name</h1>
                    <h2>By: Book autor</h2>
                </div>
                <button>
                    Buy button
                </button>
            </div>
            <div className='librosScroll'>
                <button className='botonesFlecha'>→</button>
                <img className='book-image' src={portada}/>
                <img className='book-image' src={portada}/>
                <img className='book-image' src={portada}/>
                <img className='book-image' src={portada}/>
                <button className='botonesFlecha'>←</button>
            </div>
            <div className='vendedor'>
                <img className='logoUsuario' src={usuario}/>
                <h1>Book Owner</h1>
                <button>Chat button</button>
            </div>
            <div className='info'>
                <h2>Book price = 00.00$</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
}

export default ventaLibros;