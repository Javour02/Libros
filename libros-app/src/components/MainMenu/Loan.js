import React from "react";

var Loan = (props) => {
    return (
        <div className="bookLoan">
            <img src={props.loan.bookImage} className="bookImageMain"></img>
            <h3 className="bookName">{props.loan.bookName}</h3>
            <h4 className="bookauthor">{props.loan.bookAuthor}</h4>
            <p className="dueDate">Due date: {props.loan.dueDate}</p>
        </div>
    );
};

export default Loan;