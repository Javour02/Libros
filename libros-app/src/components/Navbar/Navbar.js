import React, { Component } from "react";
import { connect } from "react-redux";

import mensajes from '../../Images/BooksIcon.png';
import notificaciones from '../../Images/ShoppingCar.png';
import logo from '../../Images/Logo.png';
import usuario from '../../Images/User.png';
import signOut from '../../Images/cerrar-sesion.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import * as actionCreators from "../../store/actions/";
import SearchBar from "../SearchBar/SearchBar";
import Bookdata from "../../dbTest.json";
class Navbar extends Component {
    render (){
        return (
            <div className='navbar'>
            <Link to="/MainMenu"><img className='navbar--logo' src={logo} /></Link>
            <SearchBar placeholder="Enter a book name!" data={Bookdata}/>
            <div className='navbar--divButtons'>
                <Link to="/MyBooks">
                    <img className="navbar--imageButton" src={mensajes} />
                </Link>
                <Link to="/ShoppingCar">
                    <img className="navbar--imageButton" src={notificaciones} />
                </Link>
                <Link to="/ShoppingCar">
                    <img className="navbar--imageButton" src={usuario} />
                </Link>
                <Link to="/SignOut">
                    <img className="navbar--imageButton" src={signOut} />
                </Link>
            </div>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("paso");
    return {
      onLogOut: () => dispatch(actionCreators.logOut()),
    };
  };




  export default connect( mapDispatchToProps)(Navbar);
