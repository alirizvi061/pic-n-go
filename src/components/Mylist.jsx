import React, { Component } from "react";
import { Button } from "react-bootstrap"
import NotesModal from "./NotesModal.jsx"
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

    axios.put(this.props.baseURL + "/users/deleteitem/" + localStorage.userId, {
      picture: picture,
    })
      .then(res => {
        console.log(res)
        this.getItems()
      })
  }

  render() {
    return (
      <div className="listDiv">
        <div className=" m-5">
          <h2>{this.props.username}'s List</h2>
          <div className="mylistContainer mylistContainerOverflow">
            {
              this.state.picList.map((picture, index) => {
                return (
                  <div className="myListDiv" key={index}>
                    <img className="myListDivPic" src={`${picture}`} alt="my list items" /><br />
                    <button type="button" className="btn btn-outline-danger" onClick={() => this.removeItem(picture)}>Delete</button>
                    {/* <p className="listText">{this.state.notes[index]}</p> */}
                    {console.log(this.state.notes.Array)}
                    <NotesModal
                      notes={this.state.notes}
                      index={index}
                    />
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
