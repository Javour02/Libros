import Loan from '../../components/CurrentlyLoans/CurrenlyLoan';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import BackPhotoBooks from '../../Images/BackPhotoBooks2.png';
import './MyLoans.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/";

class MyLoans extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        myLoans: this.props.myLoans,
    };

    componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            myLoans: nextState.myLoans,
        });
    }

    componentDidMount() {
        if (this.state.isUserLoggedIn) {
            this.props.onFetchMyLoans();
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchMyLoans();
        }
    }

    render() {
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
                            this.state.myLoans.map(loan => (
                                <Loan loan={loan}></Loan>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        myLoans: state.loansStore.myLoans,
        loadingMyLoans: state.myLoansStore.loadingMyLoans,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMyLoans: () => dispatch(actionCreators.fetchMyLoans()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyLoans);


/*var mainMenu = (props) => {
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

export default mainMenu;*/