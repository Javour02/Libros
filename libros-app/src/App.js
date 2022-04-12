import Navbar from './components/Navbar/Navbar';
import SpecificView from './components/SpecificView/SpecificView.js';
import MainMenu from './pages/MainMenu/MainMenu';
import PaymentPage from './components/PaymentPage/PaymentPage';
import ExchangePage from './components/ExchangePage/ExchangePage';
import AddReview from './components/AddReview/AddReview.js';
import SellBooks from './components/SellBooks/SellBooks.js';
import LoansPage from './pages/Loans/Loans';
import MyLoansPage from './pages/MyLoans/Loans';
import './App.css';
import axios from "./instances/axiosInstance";

import { Component } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  state = {
    notifications: [],
    loans: [],
    changes: [],
    myLoans: []
  };
  fetchTasks = async () => {
    try {
      var response = await axios.get("/notifications");
      const notifications = response.data.map((notification) => ({
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
    } catch (err) {
      console.error("Oh no!! an error!", err);
    }
  };
  componentDidMount() {
    this.fetchTasks();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
        <Routes>

          <Route
            path="/"
            element={<MainMenu data={this.state}/>}
            exact
          />
          <Route
            path="/book-view"
            element={<SpecificView />}
          />
          <Route
            path="/sell-Books"
            element={<SellBooks />}
          />
          <Route
            path="/add-review"
            element={<AddReview />}
          />
          <Route
            path="/loans"
            element={<LoansPage loans={this.state.loans}/>}
          />
          <Route
            path="/myloans"
            element={<MyLoansPage myLoans={this.state.myLoans}/>}
          />
          <Route
            path="/payment"
            element={<PaymentPage />}
          />
          <Route
            path="/exchange"
            element={<ExchangePage />}
          />
        </Routes>

      </BrowserRouter>

    );
  }
}

export default App;
