import React from "react";
import './CurrentlyLoan.css';

var Loan = (props) => {
    return (
        
        <div className="loanComponent">
            <img src={props.loan.bookImage} className="loanComponent--bookImage"></img>
            <div className="loanComponent--information">
                <h3 className="loanComponent--bookName">{props.loan.bookName}</h3>
                <h4 className="loanComponent--bookAuthor">{props.loan.bookAuthor}</h4>
                <p className="loanComponent--bookInfo">Due date: {props.loan.dueDate}</p>
                <p className="loanComponent--bookInfo">Price per month: ${props.loan.pricePerMonth}</p>
                <button className="loanComponent--button">Already return this book</button>
                <br></br><br></br><br></br>
            </div>
        </div>
    );
};

export default Loan;