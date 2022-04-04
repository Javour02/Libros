import React, { Component } from 'react'
import img from '../Images/SeisDeCuervos.jpg';
import './LoansPage.css';

export class mainMenu extends Component {
    loans = [
        {
            bookName: "Six of crows",
            bookAuthor: "Leigh Bardugo",
            bookImage: img,
            dueDate: "10/07/2022",
            pricePerMonth: 400
        },
        
    ]
    render() {
        return (
            <div className="content">
                <div className="header">
                    <h1 className="CurrentlyLoans">Currently loans</h1>
                    <h2 className="MyLoans">My loans</h2>
                </div>
                <div className="loans">
                    {
                        this.loans.map(loan => (
                            <div className="Books">
                                <img src={loan.bookImage} alt="" className="BookImage"></img>
                                <div className="Information">
                                    <h3>{loan.bookName}</h3>
                                    <h4>{loan.bookAuthor}</h4>
                                    <p>Due date: {loan.dueDate}</p>
                                    <p>Price per month: ${loan.pricePerMonth}</p>
                                    <button>Already return this book</button>
                                    <br></br><br></br><br></br>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        );
    }
}

export default mainMenu;