import { Link } from 'react-router-dom';
import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/";


import Notification from '../../components/Notifications/Notification';
import Loan from '../../components/Loans/Loan';
import ChangeBook from '../../components/ChangedBooks/ChangeBook';
import Navbar from '../../components/Navbar/Navbar';
import BackPhotoBooks from '../../Images/BackPhotoBooks.png';
import SearchBar from "../../components/SearchBar/SearchBar";
import Bookdata from "../../dbTest.json";
import './MainMenu.css';

class MainMenu extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        notifications: this.props.notifications,
        loans: this.props.loans,
        changes: this.props.changes,
        books: this.props.books,
    };

    componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            notifications: nextState.notifications,
            loans: nextState.loans,
            changes: nextState.changes,
            books: nextState.books,
        });
    }

    componentDidMount() {
        if (this.state.isUserLoggedIn) {
            this.props.onFetchNotifications();
            this.props.onFetchLoans();
            this.props.onFetchChanges();
            this.props.onFetchBooks();
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchNotifications();
            this.props.onFetchLoans();
            this.props.onFetchChanges();
            this.props.onFetchBooks();
        }
    }

    render() {
        return this.state.isUserLoggedIn
            ? this.onUserLoggedIn()
            : this.onUserLoggedOut();
    }

    onUserLoggedIn() {
        console.log(this.state);
        return (
            <div>
                <Navbar />
                <img className='main--photo' src={BackPhotoBooks}></img>
                <div className="main">
                    <div className="main--notifications">
                        <h2 className='main--text'>Notifications</h2>

                        {
                            this.state.notifications.map(notification => (
                                <Notification notification={notification}></Notification>
                            ))
                        }

                        <div className="main--currentlyLoans">
                            <Link to="/CurrentlyLoans" style={{ textDecoration: "none" }}><h2 className='main--text'>Currently Loans</h2></Link>
                            {
                                this.state.loans.map(loan => (
                                    <Loan loan={loan} submitReturn={this.submitReturn()}></Loan>
                                ))
                            }
                        </div>

                        <div className="main--changeBooks">
                            <h2 className='main--text'>My books</h2>
                            {
                                this.state.books.map(book => (
                                    <ChangeBook change={book}></ChangeBook>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    submitReturn = (bookName) => {
        //this.props.onReturnBook(bookName);
    };

    onUserLoggedOut() {
        return (
            <div style={{ textAlign: "center" }}>
                logout
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        notifications: state.notificationsStore.notifications,
        loadingNotifications: state.notificationsStore.loadingNotifications,
        loans: state.loansStore.loans,
        loadingLoans: state.loansStore.loadingLoans,
        changes: state.changesStore.changes,
        loadingChanges: state.changesStore.loadingChanges,
        books: state.booksStore.books,
        loadingBooks: state.booksStore.loadingBooks,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchNotifications: () => dispatch(actionCreators.fetchNotifications()),
        onFetchLoans: () => dispatch(actionCreators.fetchLoans()),
        onFetchChanges: () => dispatch(actionCreators.fetchChanges()),
        onReturnBooks: (bookName) => dispatch(actionCreators.returnBooks(bookName)),
        onFetchBooks: () => dispatch(actionCreators.fetchBooks()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);