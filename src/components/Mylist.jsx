import React, { Component } from "react";

export default class Mylist extends Component {
  render() {
    return (
      <div>
        <div className=" m-5">
          <h2>{this.props.username}'s List</h2>
          <ul>
            <li>{this.props.userPicList}</li>

          </ul>
        </div>
      </div>
    );
  }
}
