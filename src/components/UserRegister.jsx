import React, { Component } from "react";
import axios from "axios";

export default class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: process.env.REACT_APP_baseURL || "http://localhost:3003",
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
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //
  render() {
    return (
      <div className=" m-5">
        <h1 className="text-lg-left"> Register</h1>
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
      </div>
    );
  }
}
