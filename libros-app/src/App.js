import { Component } from 'react'
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import AddReview from './components/AddReview/AddReview.js';
//import SellBooks from './components/SellBooks/SellBooks.js';
import SpecificView from './pages/SpecificView/SpecificView.js';
import MainMenu from './pages/MainMenu/MainMenu';
import LogIn from './pages/LogIn/LogIn';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import ExchangePage from './pages/ExchangePage/ExchangePage';
import LoansPage from './pages/CurrentlyLoans/CurrentlyLoans';
import MyLoansPage from './pages/MyLoans/MyLoans';
import NotFound from "./pages/NotFound/NotFound";
import ShoppingCar from "./pages/ShoppingCar/ShoppingCar";
import SignOut from "./pages/SignOut/signOut";


import './App.css';

import axios from "./instances/axiosInstance";
import axios2 from "./instances/axiosComponent";

import * as actionCreators from "./store/actions/";


class App extends Component {

  componentDidMount = () => {
    this.props.onPersistAuthentication();
    this.fetchTasks();
  };

  state = {
    notifications: [],
    loans: [],
    changes: [],
    myLoans: [],
    books: [],
    comments: [],
    sellUsers: []
  };

  fetchTasks = async () => {
    try {
      var response = await axios.get("/notifications");
      const notifications = response.data.map((notification) => ({
        bookId: notification.bookId,
        bookName: notification.bookName,
        bookAuthor: notification.bookAuthor,
        bookImage: notification.bookImage,
        action: notification.action,
        userName: notification.userName
      }));
      this.setState({ notifications });

      response = await axios.get("/loans");
      const loans = response.data.map((loan) => ({
        bookName: loan.bookName,
        bookAuthor: loan.bookAuthor,
        bookImage: loan.bookImage,
        dueDate: loan.dueDate
      }));
      this.setState({ loans });

      response = await axios.get("/changes");
      const changes = response.data.map((change) => ({
        bookName: change.bookName,
        bookAuthor: change.bookAuthor,
        bookImage: change.bookImage,
        userName: change.userName,
        userAddress: change.userAddress
      }));
      this.setState({ changes });

      response = await axios.get("/myLoans");
      const myLoans = response.data.map((myLoan) => ({
        bookName: myLoan.bookName,
        bookAuthor: myLoan.bookAuthor,
        bookImage: myLoan.bookImage,
        dueDate: myLoan.dueDate
      }));
      this.setState({ myLoans });

      response = await axios2.get("/Javour02/Libros/books");
      const books = response.data.map((book) => ({
        name: book.name,
        author: book.author,
        description: book.description,
        image: book.image,
        rating: book.rating,
      }));
      this.setState({ books });

      response = await axios2.get("/Javour02/Libros/comments");
      const comments = response.data.map((comment) => ({
        idBook: comment.idBook,
        userName: comment.name,
        userImage: comment.image,
        comment: comment.comment
      }));
      this.setState({ comments });

      response = await axios2.get("/Javour02/Libros/sellUsers");
      const sellUsers = response.data.map((sellUser) => ({
        idBook: sellUser.id,
        name: sellUser.name,
        bookPrice: sellUser.price,
        info: sellUser.info,
        image: sellUser.image,
        type: sellUser.type
      }));
      this.setState({ sellUsers });

      console.log(this.state);
    } catch (err) {
      console.error("Oh no!! an error!", err);
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/MainMenu"
            element={<MainMenu data={this.state} />}
            exact
          />
          <Route
            path="/signOut"
            element={<SignOut />}
            exact
          />
          <Route
            path="/"
            element={<LogIn />}
            exact
          />
          <Route
            path="/book-view/:bookIndex"
            exact
            element={<SpecificView viewBook={(bookIndex) => this.viewBook(bookIndex)}
              comments={this.state.comments} users={this.state.sellUsers} />}

          />
          <Route
            path="/CurrentlyLoans"
            element={<LoansPage loans={this.state.loans} />}
          />
          <Route
            path="/MyLoans"
            element={<MyLoansPage myLoans={this.state.myLoans} />}
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


const mapDispatchToProps = (dispatch) => {
  return {
    onPersistAuthentication: () =>
      dispatch(actionCreators.persistAuthentication()),
  };
};


export default connect(null, mapDispatchToProps)(App);