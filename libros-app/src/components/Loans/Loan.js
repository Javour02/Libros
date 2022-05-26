import React from "react";
import './Loan.css';
import { Link } from "react-router-dom";


var Loan = (props) => {

    return (
        <Link to={"/book-view/" + props.loan.bookId} style={{ textDecoration: "none" }}>

            <div className="bookLoan">
                <img src={props.loan.bookImage} className="bookLoan--image"></img>
                <h3 className="bookLoan--name">{props.loan.bookName}</h3>
                <h4 className="bookLoan--author">{props.loan.bookAuthor}</h4>
                <p className="bookLoan--dueDate">Due date: {props.loan.dueDate}</p>
            </div>
        </Link>
    );


};

export default Loan;