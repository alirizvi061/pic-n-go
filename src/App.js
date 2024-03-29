import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import UserRegister from "./components/UserRegister";
import Mylist from "./components/Mylist";
import PicModal from "./components/PicModal";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import NavBar from "./NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userPicList: [],
      userId: "",
      modal: null, //for the picture modal, null initially but opens with object data
      baseURL: process.env.REACT_APP_BASEURL,
      user: false,
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
          userPicList: res.data.userPicList,
          userId: res.data._id,
          username: "",
          email: "",
          password: "",
          loggedIn: true,
          user: true,
        });
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("userPicList", res.data.userPicList);
        localStorage.setItem("userId", res.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // LOGIN HANDLES
  handleLoginChange = (event) => {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  };

  componentDidMount() {
    if (localStorage.getItem("username")) {
      let userId = localStorage.getItem("userId");
      let username = localStorage.getItem("username");
      let userPiclist = localStorage.getItem("userPicList");
      this.setState({
        user: true,
        userId: userId,
        username: username,
        userPicList: userPiclist
      });
    }
  }

  loginSubmit = (event) => {
    event.preventDefault();
    axios
      .post(this.state.baseURL + "/users/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        if (res !== null && res.status === 200) {
          let data = res.data;
          this.setState({
            userPicList: data.userPicList,
            userId: data.userId,
            user: true,
            loggedIn: true,
          });
          console.log(this.state.loggedIn);
          localStorage.setItem("username", data.username);
          localStorage.setItem("userPicList", data.userPicList);
          localStorage.setItem("userId", data.userId);
          localStorage.setItem("token", data.securityToken);
        }
      })
      .catch((error) => console.error({ Error: error }));
    this.setState({
      username: "",
      email: "",
      password: "",
    });
  };

  destroySession = () => {
    window.localStorage.clear();
    this.setState({
      loggedIn: false
    })
  };


  render() {
    return (
      <div className="container">
        <BrowserRouter exact path="/">
          <Route
            exact path="/"
            render={() => (
              <Home
                user={this.state.user}
                closeModal={this.closeModal}
                show={this.state.show}
                showModal={this.showModal}
                baseURL={this.state.baseURL}
                userId={this.state.userId}
                username={this.state.username}
              />
            )}
          />
          <Route
            path="/users"
            render={() => (
              <UserRegister
                loggedIn={this.state.loggedIn}
                userSubmit={this.userSubmit}
                handleChange={this.handleChange}
                username={this.state.username}
                email={this.state.email}
                password={this.state.password}
                isAuth={false}
              />
            )}
          />
          {/* <Route path="/users" component={UserRegister}
            loggedIn={this.state.loggedIn}
            username={this.state.username}
            email={this.state.email}
            password={this.state.password}
            userSubmit={this.userSubmit}
            handleChange={this.handleChange}
          /> */}
          <Route path="/about" component={About} />

          <Route
            path="/list"
            render={() => (
              <Mylist
                banana={this.state.userPicList}
                baseURL={this.state.baseURL}
                userId={this.state.userId}
                username={this.state.username}
              />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <Login
                loggedIn={this.state.loggedIn}
                loginSubmit={this.loginSubmit}
                handleLoginChange={this.handleLoginChange}
                username={this.state.username}
                email={this.state.email}
                password={this.state.password}
                isAuth={false}
              />
            )}
          />
          <NavBar destroySession={this.destroySession} user={this.state.user} />
          {
            this.state.show
              ? <PicModal
                closeModal={this.closeModal}
                showModal={this.state.show}
              />
              : null
          }
          <Footer />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
