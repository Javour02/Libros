import { Link } from 'react-router-dom';
import './MainMenu.css';
import Notification from '../../components/MainMenu/Notification';
import Loan from '../../components/MainMenu/Loan';
import ChangeBook from '../../components/MainMenu/ChangeBook';


var mainMenu = (props) => {
    return (
        <div className="contentMain">
            <div className="currentlyLoans">
                <Link to="/loans"><h2 >Currently Loans</h2></Link>
                {
                    props.data.loans.map(loan => (
                        <Loan loan={loan}></Loan>
                    ))
                }
            </div>

            <div className="notifications">
                <h2>Notifications</h2>
                {
                     props.data.notifications.map(notification => (
                        <Notification notification={notification}></Notification>
                    ))
                }
            </div>

            <div className="changeBooks">
                <h2>Changed books</h2>
                {
                     props.data.changes.map(change => (
                        <ChangeBook change={change}></ChangeBook>
                    ))
                }
            </div>
        </div>
    );

}

export default mainMenu;