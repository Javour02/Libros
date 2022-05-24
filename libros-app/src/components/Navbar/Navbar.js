import React from 'react';
import mensajes from '../../Images/BooksIcon.png';
import notificaciones from '../../Images/ShoppingCar.png';
import logo from '../../Images/Logo.png';
import usuario from '../../Images/User.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

var navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/"><img className='navbar--logo' src={logo} /></Link>
            <input className='navbar--searchbar' type="search"></input>
            <div className='navbar--divButtons'>
                <Link to="/ShoppingCar">
                    <img className="navbar--imageButton" src={mensajes} />
                </Link>
                <Link to="/ShoppingCar">
                    <img className="navbar--imageButton" src={notificaciones} />
                </Link>
                <Link to="/ShoppingCar">
                    <img className="navbar--imageButton" src={usuario} />
                    </Link>
            </div>
        </div>
    );
}

export default navbar;