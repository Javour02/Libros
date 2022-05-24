import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import BackPhotoBooks from '../../Images/BackPhotoCoffee.png';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';


import './ShoppingCar.css';

var shoppingCar = () => {
    return (
        <div>
            <Navbar />
            <img className='shoppingCar--photo' src={BackPhotoBooks}></img>
            <div className="shoppingCar">
                <div className='shoppingCar--header'>
                    <h1 className='shoppingCar--title'>Shopping car</h1>
                </div>
                <div className='shoppingCar--items'>
                    <p className='shoppingCar--categoryImage'>.    </p>
                    <h2 className='shoppingCar--categoryBook'>Book</h2>
                    <h2 className='shoppingCar--categoryAction'>Action</h2>
                    <h2 className='shoppingCar--category'>Price</h2>
                    <p className='shoppingCar--categoryNull'>.    </p>
                    <ShoppingItem></ShoppingItem>
                    <ShoppingItem></ShoppingItem>
                    <div className='shoppingCar--subtotal'>
                        <h3 className='shoppingCar--subtotalItems'>Subtotal (1 item):</h3>
                        <h3 className='shoppingCar--subtotalPrice'>$200</h3>
                        <br/>
                        <button className='shoppingCar--subtotalButton'>Accept</button>
                    </div>
                </div>
                <div className='shoppingCar--resume'>
                    <h2 className='shoppingCar--shoppingResume'>Shopping resume</h2>
                    <h3 className='shoppingCar--resumeItems'>Total (2 items):</h3>
                    <h3 className='shoppingCar--resumeTotal'>$200</h3>
                    <button className='shoppingCar--resumeButton'>Accept</button>
                </div>
            </div>
        </div>
    );
}

export default shoppingCar;