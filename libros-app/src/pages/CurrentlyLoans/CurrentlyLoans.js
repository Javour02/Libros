import Loan from '../../components/CurrentlyLoans/CurrenlyLoan';
import './CurrentlyLoans.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import BackPhotoBooks from '../../Images/BackPhotoBooks2.png';
import * as actionCreators from "../../store/actions/";


class CurrentlyLoans extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        loans: this.props.loans,
    };

    componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            loans: nextState.loans,
        });
    }

    componentDidMount() {
        if (this.state.isUserLoggedIn) {
            this.props.onFetchLoans();
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchLoans();
        }
    }

    render() {
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
                            this.state.loans.map(loan => (
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
        loans: state.loansStore.loans,
        loadingLoans: state.loansStore.loadingLoans,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchLoans: () => dispatch(actionCreators.fetchLoans()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentlyLoans);