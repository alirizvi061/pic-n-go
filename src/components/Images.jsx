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

  showImage = () => {
    this.props.images.map(img => {
      return <img key={img.id} src={img.urls.regular} alt={img.alt_description} />
    })

  }

  render() {

    return (
      <>
        <div className="imagesDiv">
          <img key={this.props.images.id} className="searchedImage" src={this.props.images.urls.regular} alt={this.props.images.alt_description} onClick={() => { this.showModal() }} />


        </div>
        {
          this.state.show
            ? <PicModal
              images={this.props.images}
              closeModal={this.closeModal}
              id={this.props.images.id}
              show={this.state.show}
              userId={this.props.userId}
            />
            : null
        }
      </>
    );
  }
}

export default Images;
