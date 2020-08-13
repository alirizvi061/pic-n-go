import React, { Component } from "react";
import axios from "axios"

export default class Mylist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      picList: []
    }
  }

  componentDidMount() {
    axios.get(this.props.baseURL + "/users/" + localStorage.userId, {

    })
      .then(res => {
        console.log(res)
        this.setState({
          picList: res.data.userPicList
        })
      })
  }

  render() {
    return (
      <div>
        <div className=" m-5">
          <h2>{this.props.username}'s List</h2>
          <ul>
            {console.log(this.state.picList)}
            {
              this.state.picList.map(picture => {
                return (
                  <li>{picture}</li>
                )
              })
            }

          </ul>
        </div>
      </div>
    );
  }
}
