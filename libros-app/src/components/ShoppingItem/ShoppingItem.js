import React from "react";
import './ShoppingItem.css';
import Book from '../../Images/BookImage.png';


var ShoppingItem = (props) => {
    return (
        <div className='shoppingItem'>
            <div className="shoppingItem--divImage"><img className="shoppingItem--image" src={props.item.bookImage}></img></div>
            <div className="shoppingItem--bookInfo">
                <h4 className="shoppingItem--bookName">{props.item.bookName}</h4>
                <h5 className="shoppingItem--bookAuthor">{props.item.bookAuthor}</h5>
            </div>
            <h4 className="shoppingItem--action">{props.item.action}</h4>
            <h4 className="shoppingItem--bookPrice">${props.item.price}</h4>
            <button className="shoppingItem--deleteButton">X</button>
        </div>
    );
}

export default ShoppingItem;