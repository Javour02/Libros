import './UserCard.css'

const UserCard = (props)=>{  
    const changeType = (type)=>{
        if(type === 'sell'){
            return("Book Price = ");
        }else if(type === 'lend'){
            return("Price per month = ");
        }else{
            return("");
        }
    }

    return(
        <div className="cardUser">
            <div className='vendedor'>
                <div className='leftUserInfo'>
                    <img className='logoUsuario' src={props.image}/>
                    <h1 className='tituloReview'>{props.name}</h1>
                </div>
                <button className='buttonVenta buttonReview'>Chat button</button>
            </div>
            <div className='info'>
                <h2 className='price'>{changeType(props.type)}{props.price}$</h2>
                <p>
                    <b>Information:</b><br/>
                    {props.info}</p>
            </div>
        </div>
    );
}

export default UserCard;