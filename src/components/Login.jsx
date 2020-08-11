import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className=" m-5">
          <h1> Log In</h1>
          <form onSubmit={(event) => this.props.loginSubmit(event)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="username"
                id="username"
                value={this.username}
                onChange={this.props.handleLoginChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="email"
                id="email"
                value={this.email}
                onChange={this.props.handleLoginChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="password"
                id="password"
                value={this.password}
                onChange={this.props.handleLoginChange}
              />
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
