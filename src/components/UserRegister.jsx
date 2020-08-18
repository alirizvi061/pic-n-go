import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCreated: false,
      baseURL: process.env.REACT_APP_BASEURL,
      username: "",
      email: "",
      password: "",
    };
  }
  //SIGNUP FUNCTIONALITY
  handleChange = (event) => {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  };

  userSubmit = (event) => {
    event.preventDefault();
    console.log("inside Axios statement");
    console.log(this.state.baseURL + "/users");
    axios
      .post(this.state.baseURL + "/users", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.setState({
          username: "",
          email: "",
          password: "",
          userCreated: true,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //
  render() {
    if (this.state.userCreated) {
      return <Redirect to="/login" />
    }
    return (
      <div className="signUpDiv">
        <div className="m-5">
          <h1 className="text-lg-left"> Sign Up</h1>
          <form onSubmit={(event) => this.userSubmit(event)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="username"
                id="username"
                value={this.username}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="email"
                id="email"
                value={this.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="password"
                id="password"
                value={this.password}
                onChange={this.handleChange}
              />
            </div>

            <input type="submit" />
          </form>
          <p>Already a user? <a href='/login'>Log In!</a></p>
        </div>
      </div>
    );
  }
}
