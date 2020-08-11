import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import UserRegister from "./components/UserRegister.jsx";
import NavBar from "./components/NavBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/home" component={Home} />
          <Route path="/users" component={UserRegister} />
          <Route path="/login" component={Login} />
          {/* need to make backend for Login */}
          <NavBar user={this.state.user} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
