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

  removeItem = (picture) => {
    console.log(picture)
    axios.delete(this.props.baseURL + "/users/" + localStorage.userId + "/deleteitem", {
      picture: picture
    })
      .then((res) => {
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
          <div className="container d-flex flex-wrap">
            <div className="row">
              {/* {console.log(this.state.picList)} */}
              {
                this.state.picList.map(picture => {
                  return (
                    <div key={picture}>
                      <img className=" " src={`${picture}`} alt="my list items" />
                      <button onClick={() => this.removeItem(picture)}>Delete</button>
                    </div>
                    // <li>{picture}</li>
                  )
                })
              }
            </div>
          </div >
        </div>
      </div>
    );
  }
}
