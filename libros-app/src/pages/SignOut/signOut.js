import React, { Component } from "react";
import * as actionCreators from "../../store/actions/";
import validator from "validator";
import { useHistory } from 'react-router';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class SignOut extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
    };

    componentDidMount(){
    }

    componentDidUpdate() {
        if (this.state.isUserLoggedIn) {
            //this.props.history.replace("/MainMenu");
        }
    }

    UNSAFE_componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
        });
    }

    render(){
        return (
            <div className="sign-out">
                <t1>Estas seguro de salir?</t1>
                <div className="signOut-buttons">
                    <Link to="/">
                    <button onClick={this.signOutDefinitively()}>SI</button>
                    </Link>
                    <Link to="/MainMenu">
                    <button>NO</button>
                    </Link>
                </div>
            </div>
        );
    }

    signOutDefinitively(){
        this.props.onSignOut();
    }
}

    const mapStateToProps = (state) => {
        return {
            isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            onSignOut: (authData, onSuccessCallback) =>
                dispatch(actionCreators.logOut(authData)),
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
