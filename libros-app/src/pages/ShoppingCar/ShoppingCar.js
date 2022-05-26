import { Link } from 'react-router-dom';
import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/";


import Navbar from '../../components/Navbar/Navbar';
import BackPhotoBooks from '../../Images/BackPhotoCoffee.png';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';


import './ShoppingCar.css';

class ShoppingCar extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        shoppingCar: this.props.shoppingCar,
    };

    componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            shoppingCar: nextState.shoppingCar,
        });
    }

    componentDidMount() {
        if (this.state.isUserLoggedIn) {
            this.props.onFetchShoppingCar();
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchShoppingCar();
        }
    }

    render() {
        var totalPrice = 0;
        this.state.shoppingCar.map(item => (
            totalPrice += item.price
        ))
        return (
            <div>
                <Navbar />
                <img className='shoppingCar--photo' src={BackPhotoBooks}></img>
                <div className="shoppingCar">
                    <div className='shoppingCar--header'>
                        <h1 className='shoppingCar--title'>Shopping car</h1>
                    </div>
                    <div className='shoppingCar--items'>
                        <p className='shoppingCar--categoryImage'>.    </p>
                        <h2 className='shoppingCar--categoryBook'>Book</h2>
                        <h2 className='shoppingCar--categoryAction'>Action</h2>
                        <h2 className='shoppingCar--category'>Price</h2>
                        <p className='shoppingCar--categoryNull'>.    </p>
                        {
                            this.state.shoppingCar.map(item => (
                                <ShoppingItem item={item}></ShoppingItem>
                            ))
                        }
                        <div className='shoppingCar--subtotal'>
                            <h3 className='shoppingCar--subtotalItems'>Subtotal ({this.state.shoppingCar.length} items):</h3>
                            <h3 className='shoppingCar--subtotalPrice'>${totalPrice}</h3>
                            <br />
                            <button className='shoppingCar--subtotalButton' onClick={this.buyBooks}>Accept</button>
                        </div>
                    </div>
                    <div className='shoppingCar--resume'>
                        <h2 className='shoppingCar--shoppingResume'>Shopping resume</h2>
                        <h3 className='shoppingCar--resumeItems'>Total ({this.state.shoppingCar.length} items):</h3>
                        <h3 className='shoppingCar--resumeTotal'>${totalPrice}</h3>
                        <button className='shoppingCar--resumeButton' onClick={this.buyBooks}>Accept</button>
                    </div>
                </div>
            </div>
        );
    }

    buyBooks = () => {
        this.props.onBuyBooks(this.state.shoppingCar);
        this.props.onDeleteBooks();
        alert("Transaction correct");
        this.setState({
            shoppingCar: [],
          });
    };
}

const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        shoppingCar: state.shoppingCarStore.shoppingCar,
        loadingShoppingCar: state.shoppingCarStore.loadingShoppingCar,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchShoppingCar: () => dispatch(actionCreators.fetchShoppingCar()),
        onBuyBooks: (books) => dispatch(actionCreators.buyBooks(books)),
        onDeleteBooks: () => dispatch(actionCreators.deleteBooks()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCar);

