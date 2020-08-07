import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import UserRegister from "./components/UserRegister.jsx";

class App extends Component {
  render() {
    return (
      <div>
        test
        <Home />
        <UserRegister />
      </div>
    );
  }
}

export default App;
