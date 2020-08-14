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
        // console.log(res)
        this.setState({
          picList: res.data.userPicList
        })
      })
  }

  removeItem = (picture) => {
    console.log(picture)
    console.log(localStorage)
    // console.log(this.props.baseURL
    // )
    axios.put(this.props.baseURL + "/users/deleteitem/" + localStorage.userId, {
      picture: picture
    })
      .then(res => {
        console.log(res)
      })
    // axios.delete(this.props.baseURL + "/users/deleteitem/" + localStorage.userId, {
    //   picture: picture
    // })
    //   .then(res => {
    //     console.log(res.data.deletedItem.userPicList)
    //     // this.setState({
    //     //   picList: res.data.deletedItem.userPicList
    //     // })
    //   })

  }

  render() {
    return (
      <div>
        <div className=" m-5">
          <h2>{this.props.username}'s List</h2>
          <div className="container d-flex flex-wrap">
            <div className="row">
              {
                this.state.picList.map(picture => {
                  return (
                    <div key={picture}>
                      <img className=" " src={`${picture}`} alt="my list items" />
                      <button onClick={() => this.removeItem(picture)}>Delete</button>
                    </div>
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
