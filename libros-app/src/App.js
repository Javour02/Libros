import { Component } from 'react'
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import AddReview from './components/AddReview/AddReview.js';
//import SellBooks from './components/SellBooks/SellBooks.js';
import SpecificView from './pages/SpecificView/SpecificView.js';
import MainMenu from './pages/MainMenu/MainMenu';
import LogIn from './pages/LogIn/LogIn';
import MyBooks from './pages/MyBooks/MyBooks';

import PaymentPage from './pages/PaymentPage/PaymentPage';
import ExchangePage from './pages/ExchangePage/ExchangePage';
import LoansPage from './pages/CurrentlyLoans/CurrentlyLoans';
import MyLoansPage from './pages/MyLoans/MyLoans';
import NotFound from "./pages/NotFound/NotFound";
import ShoppingCar from "./pages/ShoppingCar/ShoppingCar";

import './App.css';

import axios from "./instances/axiosInstance";
import axios2 from "./instances/axiosComponent";

import * as actionCreators from "./store/actions/";


class App extends Component {

  componentDidMount = () => {
    this.props.onPersistAuthentication();
    if (this.state.isUserLoggedIn) {
      this.props.onFetchNotifications();
      this.props.onFetchLoans();
      this.props.onFetchChanges();
      this.props.onFetchBooks();
    }
  };

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

  componentWillUpdate(nextProps, nextState) {
    if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
      this.props.onFetchNotifications();
      this.props.onFetchLoans();
      this.props.onFetchChanges();
      this.props.onFetchBooks();
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/MainMenu"
            element={<MainMenu />}
            exact
          />
          <Route
            path="/"
            element={<LogIn />}
            exact
          />
          <Route
            path="/MyBooks"
            element={<MyBooks />}
            exact
          />
          <Route
            path="/book-view/:bookIndex"
            exact
            element={<SpecificView viewBook={(bookIndex) => this.viewBook(bookIndex)} />}

          />
          <Route
            path="/CurrentlyLoans"
            element={<LoansPage />}
          />
          <Route
            path="/MyLoans"
            element={<MyLoansPage/>}
          />
          <Route
            path="/Payment"
            element={<PaymentPage />}
          />
          <Route
            path="/Exchange"
            element={<ExchangePage />}
          />
          <Route
            path="/ShoppingCar"
            element={<ShoppingCar />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    );
  }

  viewBook = (bookIndex) => {
    return this.state.books[bookIndex - 1];
  };

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
    onPersistAuthentication: () =>
      dispatch(actionCreators.persistAuthentication()),
    onFetchNotifications: () => dispatch(actionCreators.fetchNotifications()),
    onFetchLoans: () => dispatch(actionCreators.fetchLoans()),
    onFetchChanges: () => dispatch(actionCreators.fetchChanges()),
    onReturnBooks: (bookName) => dispatch(actionCreators.returnBooks(bookName)),
    onFetchBooks: () => dispatch(actionCreators.fetchBooks()),

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);