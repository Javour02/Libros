import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import img from '../../components/Images/SeisDeCuervos.jpg';
import './MainMenu.css';
import Notification from '../../components/MainMenuComponents/Notification/Notification';
import Loan from '../../components/MainMenuComponents/Loan/Loan';
import ChangeBook from '../../components/MainMenuComponents/ChangeBook/ChangeBook';


export class mainMenu extends Component {
    loans = [
        {
            bookName: "Six of crows",
            bookAuthor: "Leigh Bardugo",
            bookImage: img,
            dueDate: "10/07/2022"
        },
        {
            bookName: "Six of crows",
            bookAuthor: "Leigh Bardugo",
            bookImage: img,
            dueDate: "10/07/2022"
        },
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
                    <Link to = "/loans"><h2>Currently Loans</h2></Link>
                    {
                        this.loans.map(loan => (
                            <Loan loan={loan}></Loan>
                        ))
                    }
                </div>

                <div className="notifications">
                    <h2>Notifications</h2>
                    {
                        this.notifications.map(notification => (
                            <Notification notification={notification}></Notification>
                        ))
                    }
                </div>

                <div className="changeBooks">
                    <h2>Changed books</h2>
                    {
                        this.changes.map(change => (
                            <ChangeBook change={change}></ChangeBook>

                        ))
                    }
                </div>
            </div>
        );
    }
}

export default mainMenu;