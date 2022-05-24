import Loan from '../../components/CurrentlyLoans/CurrenlyLoan';
import './CurrentlyLoans.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import BackPhotoBooks from '../../Images/BackPhotoBooks2.png';




var mainMenu = (props) => {
    return (
        <div>
            <Navbar />
            <img className='main--photo' src={BackPhotoBooks}></img>
            <div className="loan" >
                <div className="loan--header">
                    <h1 className="loan--currentlyLoans">Currently loans</h1>
                    <Link to="/MyLoans"><h2 className="loan--myLoans">My loans</h2></Link>
                </div>
                <div className="loan--loans">
                    {
                        props.loans.map(loan => (
                            <Loan loan={loan}></Loan>
                        ))
                    }
                </div>
            </div>
        </div>
    );

}

export default mainMenu;