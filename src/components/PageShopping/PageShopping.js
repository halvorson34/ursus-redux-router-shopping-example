import React, { Component } from "react";

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
    this.setState({
      name: "",
      price: "",
    });
  };

  gotoCheckout = () => {
    this.props.history.push("/cart");
  };

  render() {
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
          <button onClick={this.gotoCheckout}>Cart</button>
        </div>
      </div>
    );
  }
}

export default PageShopping;
