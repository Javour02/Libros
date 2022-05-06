import React from "react";
import './ChangeBook.css';

var ChangeBook = (props) => {
    return (
        <div className="bookChange">
            <img src={props.change.bookImage} className="bookChange--image"></img>
            <h3 className="bookChange--name">{props.change.bookName}</h3>
            <h4 className="bookChange--author">{props.change.bookAuthor}</h4>
            <p className="bookChange--info">You have to send it to {props.change.userName} to {props.change.userAddress}</p>
        </div>
    );
};

export default ChangeBook;