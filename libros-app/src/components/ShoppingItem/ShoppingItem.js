import React from "react";
import './ShoppingItem.css';
import Book from '../Images/BookImage.png';


var ShoppingItem = () => {
    return (
        <div className='shoppingItem'>
            <div className="shoppingItem--divImage"><img className="shoppingItem--image" src={Book}></img></div>
            <div className="shoppingItem--bookInfo">
                <h4 className="shoppingItem--bookName">The Hunger Games</h4>
                <h5 className="shoppingItem--bookAuthor">Suzanne Collins</h5>
            </div>
            <h4 className="shoppingItem--action">Buy</h4>
            <h4 className="shoppingItem--bookPrice">$200</h4>
            <button className="shoppingItem--deleteButton">X</button>
        </div>
    );
}

export default ShoppingItem;