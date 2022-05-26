import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import BackPhotoBooks from '../../Images/BackPhotoBooks.png';
import BackPhotoBooks2 from '../../Images/BackPhotoBooks2.png';


import './MyBooks.css';


var MyBooks = (props) => {
    return (
        <div>
            <Navbar />
            <div class='pageOption'>
                <a href='#' class='option' data-inf='photo'>
                    <img src={BackPhotoBooks}/>
                </a>
                <a href='#' class='option' data-inf='cinema'>
                    <img src={BackPhotoBooks2}/>
                </a>
            </div>
        </div>
    );
}

export default MyBooks;