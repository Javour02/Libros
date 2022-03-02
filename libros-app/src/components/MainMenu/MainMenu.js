//import React from 'react';
import React, { Component } from 'react'
import img from '../Images/SeisDeCuervos.jpg';
import './MainMenu.css';

export class mainMenu extends Component {
    loans = [
        {
            bookName: "Six of crows",
            bookAuthor: "Leigh Bardugo",
            bookImage: img,
            dueDate: "10/07/2022"
        }
    ]

    notifications = [
        {
            bookName: "Six of crows",
            bookAuthor: "Leigh Bardugo",
            bookImage: img,
            action: "sell",
            userName: "Amelia"
        }
    ]

    changes = [
        {
            bookName: "Six of crows",
            bookAuthor: "Leigh Bardugo",
            bookImage: img,
            userName: "Alexander",
            userAddress: "Cll 22 #10-03"
        }
    ]
    render() {
        return (
            <div className="content">
                <div className="currentlyLoans">
                    <h2>Currently Loans</h2>
                    {
                        this.loans.map(loan => (
                            <div className="bookLoan">
                                <img src={loan.bookImage} className="bookImage"></img>
                                <h3 className="bookName">{loan.bookName}</h3>
                                <h4 className="bookauthor">{loan.bookAuthor}</h4>
                                <p className="dueDate">Due date: {loan.dueDate}</p>
                            </div>
                        ))
                    }


                </div>
                <div className="notifications">
                    <h2>Notifications</h2>
                    {
                        this.notifications.map(notification => (
                            <div className="notification">
                                <img src={notification.bookImage} className="notificationImage"></img>
                                <div className="notificationInfo" >
                                    <h3 className="bookName">{notification.bookName}</h3>
                                    <h4 className="bookauthor">{notification.bookAuthor}</h4>
                                    <div className="Information">
                                        <p className="Info"> {notification.userName} wants to {notification.action} this book</p>
                                        <br></br>
                                    </div>
                                    <br></br><br></br><br></br>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="changeBooks">
                    <h2>Changed books</h2>
                    {
                        this.changes.map(change => (
                            <div className="bookChange">
                                <img src={change.bookImage} className="bookImage"></img>
                                <h3 className="bookName">{change.bookName}</h3>
                                <h4 className="bookauthor">{change.bookAuthor}</h4>
                                <p className="changeInfo">You have to send it to {change.userName} to {change.userAddress}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default mainMenu;