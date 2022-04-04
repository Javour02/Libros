import React from 'react';
import mensajes from '../Images/Mensajes.png';
import notificaciones from '../Images/notificacion.png';
import logo from '../Images/Logo.png';
import usuario from '../Images/usuario-de-perfil.png';
import './Navbar.css';

var navbar = () =>{
    return(
        <div className='navbar'>
            <img className='logo' src={logo}/>
            <input className='searchbar' type="text"></input>
            <div className='divButtons'>
                <button className='botonNavbar'>loans</button>
                <button className='botonNavbar'>my books</button>
                <button className='botonNavbar'>
                    <img className="imagenBoton" src={mensajes}/>
                </button>
                <button className='botonNavbar'>
                    <img className="imagenBoton" src={notificaciones}/>
                </button>
                <button className='botonNavbar'>
                    <img className="imagenBoton" src={usuario}/>
                </button>
            </div>
        </div>
    );
}

export default navbar;