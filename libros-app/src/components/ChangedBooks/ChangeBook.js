import React from "react";
import './ChangeBook.css';
import { Link } from "react-router-dom";


var ChangeBook = (props) => {
    return (
        <Link to={"/book-view/" + props.change.bookId} style={{ textDecoration: "none" }}>
            <div className="bookChange">
                <img src={props.change.bookImage} className="bookChange--image"></img>
                <h3 className="bookChange--name">{props.change.bookName}</h3>
                <h4 className="bookChange--author">{props.change.bookAuthor}</h4>
            </div>
        </Link>
    );
};

export default ChangeBook;