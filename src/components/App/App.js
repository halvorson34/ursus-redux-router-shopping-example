import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import PageWelcome from "../PageWelcome/PageWelcome";
import PageCart from "../PageCart/PageCart";
import PageShopping from "../PageShopping/PageShopping";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>ONLINE STORE</h1>

        <div>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        <Route exact path="/" component={PageWelcome} />
        <Route exact path="/shop" component={PageShopping} />
        <Route exact path="/cart" component={PageCart} />
      </Router>
    </div>
  );
}

export default App;
