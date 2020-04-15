import React, { Component } from "react";
import { connect } from "react-redux";

class PageShopping extends Component {
  state = {
    name: "",
    price: "",
  };

  updateProduct = (input) => (event) => {
    this.setState(
      {
        ...this.state,
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  addProduct = () => {
    //dispatch to add product!
    this.props.dispatch({ type: "ADD_PRODUCT", payload: this.state });

    this.setState({
      name: "",
      price: "",
    });
  };

  gotoCheckout = () => {
    this.props.history.push("/cart");
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <h1>What are you buying?</h1>
        <input
          placeholder="Enter product name"
          onChange={this.updateProduct("name")}
          value={this.state.name}
        />
        <input
          placeholder="Enter product price"
          onChange={this.updateProduct("price")}
          type="number"
          value={this.state.price}
        />
        <button onClick={this.addProduct}>Add Product</button>
        <div>
          <button onClick={this.gotoCheckout}>
            Cart ({this.props.store.cartReducer.products.length})
          </button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PageShopping);
