import React from "react";

var Loan = (props) => {
    return (
        <div className="Books">
            <img src={props.loan.bookImage} alt="" className="BookImage"></img>
            <div className="Information">
                <h3>{props.loan.bookName}</h3>
                <h4>{props.loan.bookAuthor}</h4>
                <p>Due date: {props.loan.dueDate}</p>
                <p>Price per month: ${props.loan.pricePerMonth}</p>
                <button>Already return this book</button>
                <br></br><br></br><br></br>
            </div>
        </div>
    );
};

export default Loan;