import { Component } from "react";
import './Comment.css'

const Comment =(props)=>{
    return(
        <div className='comment'>
            <img className='comment--image' src={props.image}/>
            <div className="comment--info">
                <h2 className="comment--user">{props.name}</h2>
                <p className="comment--comment">{props.comment}</p>
            </div>
        </div>
    );
}

export default Comment;