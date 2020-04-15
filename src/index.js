import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const userInitialState = {
  firstName: "",
  lastName: "",
  address: "",
};

const userReducer = (state = userInitialState, action) => {
  if (action.type === "ADD_USER_INFORMATION") {
    return { ...action.payload };
  }

  return state;
};

const cartInitialState = {
  products: [],
};

const cartReducer = (state = cartInitialState, action) => {
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      products: [...state.products, action.payload],
    };
  }

  return state;
};

const storeInstance = createStore(
  combineReducers({ userReducer, cartReducer })
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
