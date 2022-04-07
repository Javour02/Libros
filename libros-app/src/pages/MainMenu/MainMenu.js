import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import img from '../../components/Images/SeisDeCuervos.jpg';
import './MainMenu.css';
import Notification from '../../components/MainMenuComponents/Notification';
import Loan from '../../components/MainMenuComponents/Loan';
import ChangeBook from '../../components/MainMenuComponents/ChangeBook';


var mainMenu = (props) => {
    return (
        <div className="content">
            <div className="currentlyLoans">
                <Link to="/loans"><h2>Currently Loans</h2></Link>
                {
                    props.data.loans.map(loan => (
                        <Loan loan={loan}></Loan>
                    ))
                }
            </div>

            <div className="notifications">
                <h2>Notifications</h2>
                {
                     props.data.notifications.map(notification => (
                        <Notification notification={notification}></Notification>
                    ))
                }
            </div>

            <div className="changeBooks">
                <h2>Changed books</h2>
                {
                     props.data.changes.map(change => (
                        <ChangeBook change={change}></ChangeBook>
                    ))
                }
            </div>
        </div>
    );

}

export default mainMenu;