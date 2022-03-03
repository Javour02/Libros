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
            <button>loans</button>
            <button>my books</button>
            <button>
                <img src={mensajes}/>
            </button>
            <button>
                <img src={notificaciones}/>
            </button>
            <button>
                <img src={usuario}/>
            </button>
        </div>
    );
}

export default navbar;