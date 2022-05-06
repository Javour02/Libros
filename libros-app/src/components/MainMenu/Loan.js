import React from "react";
import './Loan.css';

var Loan = (props) => {
    return (
        <div className="bookLoan">
            <img src={props.loan.bookImage} className="bookLoan--image"></img>
            <h3 className="bookLoan--name">{props.loan.bookName}</h3>
            <h4 className="bookLoan--author">{props.loan.bookAuthor}</h4>
            <p className="bookLoan--dueDate">Due date: {props.loan.dueDate}</p>
        </div>
    );
};

export default Loan;