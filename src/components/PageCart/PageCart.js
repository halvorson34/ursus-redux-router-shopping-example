import React, { Component } from "react";
import { connect } from "react-redux";

class PageCart extends Component {
  render() {
    let total = 0;
    // What is the products property in Cart Reducer?
    // { [{}, {}, {}] }
    const productsArray = this.props.store.cartReducer.products.map(
      (item, index) => {
        total = total + parseFloat(item.price);

        return (
          <div key={index}>
            <p>
              {item.name} - {item.price}
            </p>
          </div>
        );
      }
    );

    total = total.toFixed(2);

    return (
      <div>
        <h1>Cart</h1>
        <h3>Customer Information:</h3>
        <p>
          Name: {this.props.store.userReducer.firstName}{" "}
          {this.props.store.userReducer.lastName}
        </p>
        <p>Address: {this.props.store.userReducer.address}</p>

        <h3>Purchases:</h3>
        {productsArray}
        <p>Total: ${total}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PageCart);
