import React, { Component } from "react";
import * as actionCreators from "../../store/actions/";
import validator from "validator";
import Navbar from '../../components/Navbar/Navbar';

import { useHistory } from 'react-router';
import { connect } from "react-redux";
import './LogIn.css';
import { Link } from 'react-router-dom';

class LogIn extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: "",
        password: "",
        isError: this.props.errorMessageAuth,
        errorMessage: this.props.errorMessage, 
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

    render() {
        return this.state.isUserLoggedIn
            ? this.onUserLoggedIn()
            : this.onUserLoggedOut();
    }

    onUserLoggedIn() {
        return (<Navbar />);
    }

    onUserLoggedOut() {
        return (
            <div className="logIn">
                <h1 className="logIn--title">Log in</h1>
                <input type="email"
                className="logIn--input"
                placeholder="Email address"
                value={this.state.emailAddress}
                onChange={(event) => {
                    this.updateLoginInfo(event, "userName");
                }}>
                </input>
                <br />
                <input type="password"
                className="logIn--input" 
                placeholder="Password" 
                value={this.state.password}
                onChange={(event) => {
                    this.updateLoginInfo(event, "password");
                }}>
                </input>
                <br />
                <button className="logIn--button" onClick={this.submitLoginForm}>Log in</button>
                <p className="logIn--message">don't have an account?</p>
                <button className="logIn--button" onClick={this.submitSignUpForm}>Sign up</button>
                {this.showErrorMessage()}
                {this.showButtontoGo()}
            </div>
        );
    }

    showButtontoGo = ()=>{
        if(this.props.isUserLoggedIn){
            return <button><Link to="/MainMenu">Ir al Menu</Link></button>
        }
        
    }

    showErrorMessage(){
        let content = <p>""</p>;

        if (this.props.errorMessageAuth) {
        content = <p>{this.props.errorMessage}</p>;
        }

        return content;
    }

    updateLoginInfo = (event, type) => {
        const updatedLoginInfo = {
            ...this.state,
        };

        updatedLoginInfo[type] = event.target.value;
        console.log(updatedLoginInfo);
        this.setState({
            userName: updatedLoginInfo.userName,
            password: updatedLoginInfo.password,
        });
    };

    submitLoginForm = () => {
        const userData = {
            email: this.state.userName,
            password: this.state.password,
        };

        if(validator.isEmail(userData.email) && userData.password!==""){
            this.props.onUserLogin(userData, () => {
                this.props.history.push("/");
            });
        }else{
            let isError = true;
            let message = "Datos invalidos. Llene la información correctamente para continuar";
            this.props.onError(isError, message);
        }
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

        if(validator.isEmail(userData.email) && userData.password!==""){
            this.props.onUserSignUp(userData, () => {
                this.props.history.push("/");
            });
        }else{
            let isError = true;
            let message = "Datos invalidos. Llene la información correctamente para continuar";
            this.props.onError(isError, message);
        }
    };
}


const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        errorMessageAuth: state.authenticationStore.errorMessageAuth,
        errorMessage: state.authenticationStore.errorMessage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLogin: (authData, onSuccessCallback) =>
            dispatch(actionCreators.logIn(authData, onSuccessCallback)),
        onUserSignUp: (authData, onSuccessCallback) =>
            dispatch(actionCreators.signUp(authData, onSuccessCallback)),
        onError: (isError, message) =>
            dispatch(actionCreators.showError(isError, message)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
