import React, { Component } from "react";

export default class UserRegister extends Component {
  render() {
    return (
      <div>
        <h1> Register</h1>
        <form onSubmit={(event) => this.props.userSubmit(event)}>
          <input
            type="text"
            placeholder="username"
            id="username"
            value={this.props.username}
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="email"
            id="email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            value={this.props.password}
            onChange={this.props.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
