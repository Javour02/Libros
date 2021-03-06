import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import authenticationReducer from "./store/reducers/authentication";
import notificationsReducer from "./store/reducers/books";
import changesReducer from "./store/reducers/books";
import loansReducer from "./store/reducers/books";
import myLoansReducer from "./store/reducers/books";
import booksReducer from "./store/reducers/books";
import shoppingCarReducer from "./store/reducers/books";
import submitLoanReducer from "./store/reducers/books";

const rootReducer = combineReducers({
  authenticationStore: authenticationReducer,
  notificationsStore: notificationsReducer,
  loansStore: loansReducer,
  changesStore: changesReducer,
  myLoansStore: myLoansReducer,
  booksStore: booksReducer,
  shoppingCarStore: shoppingCarReducer,
  submitLoanStore: submitLoanReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
