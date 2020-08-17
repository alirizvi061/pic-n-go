import React, { Component } from "react";
import PicModal from "./PicModal";
import axios from "axios";

class Images extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      picURL: ""
    }
  }

  showPicInfo = () => {
    console.log(this.props.images.farm);
    console.log(this.props.images.server);
    console.log(this.props.images.id);
    console.log(this.props.images.secret);
    let imageURL = `https://farm${this.props.images.farm}.staticflickr.com/${this.props.images.server}/${this.props.images.id}_${this.props.images.secret}.jpg`;
    console.log(imageURL);
  };

  saveToList = () => {
    console.log("function entered");
    let imageURL = `https://farm${this.props.images.farm}.staticflickr.com/${this.props.images.server}/${this.props.images.id}_${this.props.images.secret}.jpg`;

    console.log(imageURL);
    console.log(this.props.baseURL);
    console.log(this.props.userId);
    axios
      .put(this.props.baseURL + "/users/list", {
        _id: this.props.userId,
        image: imageURL,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error({ Error: error }));
  };

  // closeHomeImageShowModal = () => {
  //   this.props.closeHomeShowModal()
  // }

  showModal = () => {
    console.log("show modal function entered")
    this.setState({
      show: true
    })
    console.log(this.state.show)
  }

  closeModal = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div className="searchedImages text-lg-left">
        <img
          onClick={() => { this.showModal() }}
          // onClick={this.showPicInfo}
          className="searchedImage img-thumbnail w-20  p-3"
          key={this.props.images.key}
          alt="flicker items"
          src={`https://farm${this.props.images.farm}.staticflickr.com/${this.props.images.server}/${this.props.images.id}_${this.props.images.secret}.jpg`}
        />
        {/* <button onClick={this.saveToList}>Save To List</button> */}
        {
          this.state.show
            ? <PicModal
              saveToList={this.saveToList}
              closeModal={this.closeModal}
              farm={this.props.images.farm}
              server={this.props.images.server}
              id={this.props.images.id}
              secret={this.props.images.secret}
            />
            : null
        }
      </div>
    );
  }
}

export default Images;
