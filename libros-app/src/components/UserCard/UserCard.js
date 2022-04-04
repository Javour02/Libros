import './UserCard.css'

const UserCard = (props)=>{  
    return(
        <div className="cardUser">
            <div className='vendedor'>
                <div className='leftUserInfo'>
                    <img className='logoUsuario' src={props.image}/>
                    <h1>{props.name}</h1>
                </div>
                <button className='buttonVenta'>Chat button</button>
            </div>
            <div className='info'>
                <h2>Book price = {props.price}$</h2>
                <p>
                    <b>Information:</b><br/>
                    {props.info}</p>
            </div>
        </div>
    );
}

export default UserCard;