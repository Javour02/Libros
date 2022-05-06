import React from 'react';
import mensajes from '../Images/Mensajes.png';
import notificaciones from '../Images/notificacion.png';
import logo from '../Images/Logo.png';
import usuario from '../Images/usuario-de-perfil.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

var navbar = () =>{
    return(
        <div className='navbar'>
            <Link to="/"><img className='logo' src={logo}/></Link>
            <input className='searchbar' type="search"></input>
            <div className='divButtons'>
                <Link to="/loans"><button className='botonNavbar'>loans</button></Link>
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