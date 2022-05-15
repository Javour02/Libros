import { Link } from 'react-router-dom';

import Notification from '../../components/Notifications/Notification';
import Loan from '../../components/Loans/Loan';
import ChangeBook from '../../components/ChangedBooks/ChangeBook';
import Navbar from '../../components/Navbar/Navbar';
import BackPhotoBooks from '../../components/Images/BackPhotoBooks.png';

import './MainMenu.css';


var mainMenu = (props) => {
    return (
        <div>
            <Navbar />
            <img className='main--photo' src={BackPhotoBooks}></img>
            <div className="main">
                <div className="main--notifications">
                    <h2 className='main--text'>Notifications</h2>
                        {
                            props.data.notifications.map(notification => (
                                <Notification notification={notification}></Notification>
                            ))
                        }
                </div>

                <div className="main--currentlyLoans">
                    <Link to="/CurrentlyLoans" style={{ textDecoration: "none" }}><h2 className='main--text'>Currently Loans</h2></Link>
                    {
                        props.data.loans.map(loan => (
                            <Loan loan={loan}></Loan>
                        ))
                    }
                </div>

                <div className="main--changeBooks">
                    <h2 className='main--text'>Changed books</h2>
                    {
                        props.data.changes.map(change => (
                            <ChangeBook change={change}></ChangeBook>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default mainMenu;