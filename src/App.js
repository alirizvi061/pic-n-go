import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import UserRegister from "./components/UserRegister.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: "http://localhost:3003",
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
      <div>
        test
        <Home />
        <UserRegister
          handleChange={this.handleChange}
          userSubmit={this.userSubmit}
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
          baseURL={this.state.baseURL}
        />
      </div>
    );
  }
}

export default App;
