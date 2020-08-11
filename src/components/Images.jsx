import React, { Component } from "react";

class Images extends Component {
  render() {
    return (
      <div className="searchedImages container">
        <img
          className="searchedImage img-thumbnail w-50 h-50 p-3"
          key={this.props.images.key}
          alt="flicker items"
          src={`https://farm${this.props.images.farm}.staticflickr.com/${this.props.images.server}/${this.props.images.id}_${this.props.images.secret}.jpg`}
        />
      </div>
    );
  }
}

export default Images;
