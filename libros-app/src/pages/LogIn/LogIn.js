import React, { Component } from "react";
import * as actionCreators from "../../store/actions/";
import { connect } from "react-redux";
import './LogIn.css';

class LogIn extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        emailAddress: "",
        password: "",
        isError: false,
    };

    componentDidMount() {
        if (this.state.isUserLoggedIn) {
            this.props.onFetchPosts();
        }
    }

    componentDidUpdate() {
        if (this.state.isUserLoggedIn) {
            this.props.history.replace("/");
        }
    }

    UNSAFE_componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
        });
    }
    render() {
        return this.state.isUserLoggedIn
            ? this.onUserLoggedIn()
            : this.onUserLoggedOut();
    }

    onUserLoggedIn() {
        return (<h1>Entraste</h1>);
    }

    onUserLoggedOut() {
        return (
            <div className="logIn">
                <h1 className="logIn--title">Log in</h1>
                <input type="email" className="logIn--input" placeholder="Email address" value={this.state.emailAddress}
                    onChange={(event) => {
                        this.updateLoginInfo(event, "emailAddress");
                    }}></input><br />
                <input type="password" className="logIn--input" placeholder="Password" value={this.state.password}
                    onChange={(event) => {
                        this.updateLoginInfo(event, "password");
                    }}></input><br />
                <button className="logIn--button" onClick={this.submitLoginForm}>Log in</button>

                <p className="logIn--message">don't have an account?</p>
                <button className="logIn--button" onClick={this.submitSignUpForm}>Sign up</button>
            </div>
        );
    }

    updateLoginInfo = (event, type) => {
        const updatedLoginInfo = {
            ...this.state,
        };

        updatedLoginInfo[type] = event.target.value;

        this.setState({
            emailAddress: updatedLoginInfo.emailAddress,
            password: updatedLoginInfo.password,
        });
    };

    submitLoginForm = () => {
        const userData = {
            email: this.state.emailAddress,
            password: this.state.password,
        };

        this.props.onUserLogin(userData, () => {
            this.props.history.push("/");
        });

        this.setState({
            isError: this.props.errorMessageAuth,
        });
    };

    updateSignUpInfo = (event, type) => {
        const updatedLoginInfo = {
            ...this.state,
        };

        updatedLoginInfo[type] = event.target.value;

        this.setState({
            userName: updatedLoginInfo.userName,
            password: updatedLoginInfo.password,
        });
    };

    submitSignUpForm = () => {
        const userData = {
            email: this.state.userName,
            password: this.state.password,
        };

        this.setState({
            isError: this.props.errorMessageAuth,
        });

        this.props.onUserSignUp(userData, () => {
            this.props.history.push("/MainMenu");
        });
    };
}


const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLogin: (authData, onSuccessCallback) =>
            dispatch(actionCreators.logIn(authData, onSuccessCallback)),
        onUserSignUp: (authData, onSuccessCallback) =>
            dispatch(actionCreators.signUp(authData, onSuccessCallback)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
