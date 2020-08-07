import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/"> Home </Link>
        <Link to="/users"> Sign Up </Link>
      </div>
    );
  }
}
