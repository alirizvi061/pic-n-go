import React, { Component } from "react";
import axios from "axios"

export default class Mylist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      picList: [],
      notes: []
    }
  }

  getItems = () => {
    axios.get(this.props.baseURL + "/users/" + localStorage.userId, {

    })
      .then(res => {
        // console.log(res)
        this.setState({
          picList: res.data.userPicList,
          notes: res.data.notes
        })
      })
  }

  componentDidMount() {
    this.getItems()
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
        this.getItems()
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
          <div className="mylistContainer">
            {
              this.state.picList.map((picture, index) => {
                return (
                  <div className="myListDiv" key={index}>
                    <img className="myListDivPic" src={`${picture}`} alt="my list items" />
                    <button onClick={() => this.removeItem(picture)}>Delete</button>
                    <p>{this.state.notes[index]}</p>
                  </div>
                )
              })
            }
          </div >
        </div>
      </div>
    );
  }
}
