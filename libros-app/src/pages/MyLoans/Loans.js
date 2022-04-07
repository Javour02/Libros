import React, { Component } from 'react'
import img from '../../components/Images/SeisDeCuervos.jpg';
import Loan from '../../components/LoansComponents/Loan';
import { Link } from 'react-router-dom';
import './Loans.css';

var mainMenu = (props) => {
    return (
        <div className="contentLoan">
            <div className="header">
                <Link to="/loans"><h2 className="CurrentlyLoans">Currently loans</h2></Link>
                <h1 className="MyLoans">My loans</h1>
            </div>
            <div className="loans">
                {
                    props.myLoans.map(loan => (
                        <Loan loan={loan}></Loan>
                    ))
                }

            </div>
        </div>
    );

}

export default mainMenu;