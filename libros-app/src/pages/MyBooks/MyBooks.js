import { Link } from 'react-router-dom';
import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/";


import ChangeBook from '../../components/ChangedBooks/ChangeBook';

import Navbar from '../../components/Navbar/Navbar';
import BackPhotoBooks from '../../Images/BackPhotoBooks.png';
import BackPhotoBooks2 from '../../Images/BackPhotoBooks2.png';


import './MyBooks.css';

class MyBooks extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        changes: this.props.changes,
    };

    componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            changes: nextState.changes,
        });
    }

    componentDidMount() {
        if (this.state.isUserLoggedIn) {
            this.props.onFetchChanges();
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchChanges();
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <img className='main--photo' src={BackPhotoBooks2}></img>
                <h1 className="myBooks--tittle">My books</h1>
                <div className="myBooks--content">
                    {
                        this.state.changes.map(book => (
                            <ChangeBook change={book}></ChangeBook>
                        ))
                    }
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        changes: state.changesStore.changes,
        loadingChanges: state.changesStore.loadingChanges,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchChanges: () => dispatch(actionCreators.fetchChanges()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks);