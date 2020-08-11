import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import UserRegister from "./components/UserRegister.jsx";
import NavBar from "./components/NavBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: "http://localhost:3003",
      // isAuth: false,
      user: false,
      username: "",
      email: "",
      password: "",
    };
  }
  // LOGIN HANDLES
  handleLoginChange = (event) => {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  };

  loginSubmit = (event) => {
    event.preventDefault();
    axios
      .post(this.state.baseURL + "/users/login", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res);
        if (res !== null && res.status == 200) {
          let data = res.data;
          console.log(data);
          this.setState({
            user: true,
          });
          console.log(this.state.user);
          localStorage.setItem("username", data.username);
          localStorage.setItem("token", data.securityToken);
        }
      })
      .catch((error) => console.error({ Error: error }));
    // console.log(this.state);
    this.setState({
      username: "",
      email: "",
      password: "",
    });
    // console.log(this.state);
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/home" component={Home} />
          <Route path="/users" component={UserRegister} />
          <Route
            path="/login"
            render={() => (
              <Login
                loginSubmit={this.loginSubmit}
                handleLoginChange={this.handleLoginChange}
                username={this.state.username}
                email={this.state.email}
                password={this.state.password}
                isAuth={false}
              />
            )}
          />
          {/* need to make backend for Login */}
          <NavBar user={this.state.user} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
