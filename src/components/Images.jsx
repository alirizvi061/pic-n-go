import React, { Component } from "react";
import axios from "axios";

class Images extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     base: "http://localhost:3003", // change this to the environmental variable when deploying
  //   };
  // }

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
    //   //send back current user ID and the Image URL
    //   //make a route on the back end that console logs the response
    //   //this function is the axios call
    //   //it'll take image data and send it to the back end
  };

  render() {
    return (
      <div className="searchedImages">
        <img
          onClick={this.showPicInfo}
          className="searchedImage img-thumbnail w-70  p-3"
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
