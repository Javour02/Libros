import { Component } from "react";
import './Comment.css'

const Comment =(props)=>{
    return(
        <div className='comment1'>
            <div className="imagenComment">
                <img className='imgComment' src={props.image}/>
            </div>
            <div className="comment2">
                <h2>{props.name}</h2>
                <p>{props.comment}</p>
            </div>
        </div>
    );
}

export default Comment;