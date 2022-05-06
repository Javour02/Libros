import React from "react";
import { Link } from "react-router-dom";
import './Notification.css';

var Notification = (props) => {
    return (
        <Link to={"/book-view/"+ props.notification.bookId}>
            <div className="notification">
                <img src={props.notification.bookImage} className="notification--image"></img>
                <div className="notification--content">
                    <h3 className="notification--bookName">{props.notification.bookName}</h3>
                    <h4 className="notification--bookAuthor">{props.notification.bookAuthor}</h4>
                    <div className="notification--information">
                        <p className="notificaion--info"> {props.notification.userName} wants to {props.notification.action} this book</p>
                        <br></br>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Notification;