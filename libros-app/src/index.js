import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import authenticationReducer from "./store/reducers/authentication";

const rootReducer = combineReducers({
  authenticationStore: authenticationReducer,
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
