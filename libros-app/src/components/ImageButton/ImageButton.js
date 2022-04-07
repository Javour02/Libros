import './ImageButton.css'

const ImageButton = (props)=>{
    return(
        <button className='buttonImagen'>
            <img className='imgButton' src={props.img}/>
        </button>
    )
}

export default ImageButton;