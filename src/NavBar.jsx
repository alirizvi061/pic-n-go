import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="primary"
        variant="dark"
        className="fixed-top"
      >

        <Navbar.Brand className="ml-3" id="nav-title" href="/home">
          Pic N Go
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ml-auto mr-5">
            {this.props.user ? (
              <>
                <Button className="navBarButtons" href="/home">Home</Button>
                <Button className="navBarButtons" href="/list">List</Button>
                <Button
                  className="navBarButtons"
                  type="button"
                  id="btnLogout"
                  onClick={this.props.destroySession}
                  href="/home"
                >
                  Logout
                </Button>
              </>
            ) : (
                <>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/users">Sign Up</Nav.Link>
                </>
              )}

          </Nav>

        </Navbar.Collapse>

      </Navbar>
    );
  }
}
