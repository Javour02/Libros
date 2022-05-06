import Loan from '../../components/Loans/Loan';
import './Loans.css';
import { Link } from 'react-router-dom';


var mainMenu = (props) => {
    return (
        <div className="contentLoan" >
            <div className="header">
                <h1 className="CurrentlyLoans">Currently loans</h1>
                <Link to="/myloans"><h2 className="MyLoans">My loans</h2></Link>
            </div>
            <div className="loans">
                {
                    props.loans.map(loan => (
                        <Loan loan={loan}></Loan>
                    ))
                }

            </div>
        </div>
    );

}

export default mainMenu;