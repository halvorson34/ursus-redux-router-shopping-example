import React, { Component } from "react";
import { connect } from "react-redux";

class PageWelcome extends Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
  };

  updateUser = (input) => (event) => {
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

  handleClick = () => {
    this.props.dispatch({ type: "ADD_USER_INFORMATION", payload: this.state });

    this.props.history.push("/shop");
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <h1>Welcome</h1>
        <h6>Who are you?</h6>
        <input
          placeholder="Enter your first name"
          onChange={this.updateUser("firstName")}
        />
        <input
          placeholder="Enter your last name"
          onChange={this.updateUser("lastName")}
        />
        <input
          placeholder="Enter your address"
          onChange={this.updateUser("address")}
        />
        <button onClick={this.handleClick}>Submit User</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PageWelcome);
