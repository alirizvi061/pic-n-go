import React, { Component } from "react";

export default class UserRegister extends Component {
  render() {
    return (
      <div>
        <h1> Register</h1>
        <form>
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
