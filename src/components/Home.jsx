import React, { Component } from "react";
import axios from "axios";
import Images from "./Images";

const APIKEY = process.env.REACT_APP_APIKEY;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      images: [],
      apiData: [],
      apiKey: APIKEY,
      queryTerm: "",
    };
  }

  handleChange = (event) => {
    this.setState({ queryTerm: event.target.value });
  };


  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios
      .get(
        `https://api.unsplash.com/search/photos?query=${this.state.queryTerm}&client_id=${this.state.apiKey}`, {

      }
      )
      .then((response) => {
        this.setState({
          images: response.data.results,
          isLoaded: true,
        });
      })
      .catch(error => {
        console.log("empty input", error)
      })

  };




  render() {
    const imageComponent = this.state.images.map((images) => {

      return (
        <div>
          <Images
            id
            user={this.props.user}
            baseURL={this.props.baseURL}
            userId={this.props.userId}
            username={this.props.username}
            images={images}
          />
        </div>

      );
    });


    return (
      <>
        <div className=" homeDiv m-5 text-sm-center">
          <div>Found: {this.state.images.length} Images</div>

          <h1 >Pic N Go</h1>
          <p>Got a trip coming up? Search for thousands of pictures and add them to your bucket list!</p>

          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="form-group">
              <input
                type="text"
                id="searchbar"
                placeholder="Type a keyword to start searching...."
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            <input className="Button" type="submit" />
          </form>
        </div>
        <div className="horizontalView">{this.state.isLoaded && imageComponent}</div>
      </>
    );
  }
}

export default Home;
