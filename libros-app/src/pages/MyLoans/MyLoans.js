import Loan from '../../components/CurrentlyLoans/CurrenlyLoan';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import BackPhotoBooks from '../../Images/BackPhotoBooks2.png';
import './MyLoans.css';

var mainMenu = (props) => {
    return (
        <div>
            <Navbar />
            <img className='main--photo' src={BackPhotoBooks}></img>
            <div className="myLoan">
                <div className="myLoan--header">
                    <h1 className="myLoan--myLoans">My loans</h1>
                    <Link to="/CurrentlyLoans"><h2 className="myLoan--currentlyLoans">Currently loans</h2></Link>
                </div>
                <div className="myLoan--loans">
                    {
                        props.myLoans.map(loan => (
                            <Loan loan={loan}></Loan>
                        ))
                    }
                </div>
            </div>
        </div>

    );

}

export default mainMenu;