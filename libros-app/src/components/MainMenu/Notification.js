import React from "react";
import { Link } from "react-router-dom";

var Notification = (props) => {
    return (
        <Link to="/book-view">
            <div className="notification">
                <img src={props.notification.bookImage} className="notificationImage"></img>
                <div className="notificationInfo">
                    <h3 className="bookName">{props.notification.bookName}</h3>
                    <h4 className="bookauthor">{props.notification.bookAuthor}</h4>
                    <div className="Information">
                        <p className="Info"> {props.notification.userName} wants to {props.notification.action} this book</p>
                        <br></br>
                    </div>
                    <br></br><br></br><br></br>
                </div>
            </div>
        </Link>
    );
};

export default Notification;