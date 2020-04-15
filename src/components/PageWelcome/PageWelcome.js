import React, { Component } from "react";

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
    // dispatch user information here!
    this.props.history.push("/shop");
  };

  render() {
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
        <button onClick={this.handleClick}>Submit User Name</button>
      </div>
    );
  }
}

export default PageWelcome;
