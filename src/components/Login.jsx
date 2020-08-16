import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/home" />
    }
    return (
      <div>
        <div className=" m-5">
          <h1 className="text-lg-left"> Log In</h1>
          <form onSubmit={(event) => this.props.loginSubmit(event)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="username"
                id="username"
                value={this.props.username}
                onChange={this.props.handleLoginChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="password"
                id="password"
                value={this.props.password}
                onChange={this.props.handleLoginChange}
              />
            </div>
            <input type="submit" />
          </form>
          <p>Not a user? <a href='/users'>Sign Up!</a></p>
        </div>
      </div >
    );
  }
}
