import React, { Component } from "react";
import axios from "axios";

class Images extends Component {

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


  render() {
    return (
      <div className="searchedImages text-lg-left">
        <img
          onClick={() => { this.props.homeShowModal() }}
          // onClick={this.showPicInfo}
          className="searchedImage img-thumbnail w-20  p-3"
          key={this.props.images.key}
          alt="flicker items"
          src={`https://farm${this.props.images.farm}.staticflickr.com/${this.props.images.server}/${this.props.images.id}_${this.props.images.secret}.jpg`}
        />
        <button onClick={this.saveToList}>Save To List</button>
      </div>
    );
  }
}

export default Images;
