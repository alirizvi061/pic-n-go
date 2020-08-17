import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import UserRegister from "./components/UserRegister";
import Mylist from "./components/Mylist";
import PicModal from "./components/PicModal";
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
        // email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res);
        if (res !== null && res.status === 200) {
          let data = res.data;
          // console.log(data);
          // console.log(data.userId);
          // console.log(data.userPicList);
          this.setState({
            userPicList: data.userPicList,
            userId: data.userId,
            user: true,
            loggedIn: true,
          });
          console.log(this.state.loggedIn);
          console.log("this userId in state is now", this.state.userId);
          localStorage.setItem("username", data.username);
          localStorage.setItem("userPicList", data.userPicList);
          localStorage.setItem("userId", data.userId);
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

  destroySession = () => {
    window.localStorage.clear();
  };

  // showModal = () => {
  //   console.log("show modal function entered")
  //   this.setState({
  //     show: true
  //   })
  //   console.log(this.state.show)
  // }

  // closeModal = () => {
  //   this.setState({
  //     show: false
  //   })
  // }

  // CREATE SET MODAL FUNCTION
  // PASS IT DOWN AS PROPS TO THE MODAL.JSX AND HOME.JSX
  // FROM THAT COMPONENT, SET MODAL STATE TO TRUE
  // CREATE SET MODAL FUNCTION THAT TAKES VALUE AND THIS.SETSTATE TO THAT VALUE
  render() {
    return (
      <div className="container mr-auto">
        <BrowserRouter>
          <Route
            path="/home"
            render={() => (
              <Home
                closeModal={this.closeModal}
                show={this.state.show}
                showModal={this.showModal}
                baseURL={this.state.baseURL}
                userId={this.state.userId}
                username={this.state.username}
              />
            )}
          />
          <Route path="/users" component={UserRegister} />
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
          {/* create modal jsx, wrap in turnery operator. if true, pass stuff, in null close modal*/}
          {
            this.state.show
              ? <PicModal
                closeModal={this.closeModal}
                showModal={this.state.show}
              />
              : null
          }
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
