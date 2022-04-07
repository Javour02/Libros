import React from "react";

var ChangeBook = (props) => {
    return (
        <div className="bookChange">
            <img src={props.change.bookImage} className="bookImageMain"></img>
            <h3 className="bookName">{props.change.bookName}</h3>
            <h4 className="bookauthor">{props.change.bookAuthor}</h4>
            <p className="changeInfo">You have to send it to {props.change.userName} to {props.change.userAddress}</p>
        </div>
    );
};

export default ChangeBook;