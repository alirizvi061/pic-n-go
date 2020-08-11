import React, { Component } from "react";
import axios from "axios";
import Images from "./Images";

const APIKEY = process.env.REACT_APP_APIKEY;
console.log(APIKEY);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      images: [],
      apiData: [],
      baseURL: "https://api.flickr.com/services/rest/?",
      method: "method=flickr.photos.search&api_key=",
      apiKey: APIKEY,
      text: "&text=",
      queryTerm: "",
      jsonResponse: "&format=json&nojsoncallback=1",
    };
  }

  handleChange = (event) => {
    this.setState({ queryTerm: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    axios
      .get(
        this.state.baseURL +
          this.state.method +
          this.state.apiKey +
          this.state.text +
          this.state.queryTerm +
          this.state.jsonResponse
      )
      .then((res) => {
        this.state.apiData = res.data.photos.photo;
        this.setState({
          isLoaded: true,
        });
        console.log(this.state.apiData);
      });
  };

  render() {
    const imageComponent = this.state.apiData.map((images) => {
      return <Images images={images} />;
    });

    return (
      <div className="m-5">
        <h1>Pic n Go</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group">
            <input
              type="text"
              id="searchbar"
              onChange={(event) => this.handleChange(event)}
            />
          </div>
          <input type="submit" />
        </form>
        {this.state.isLoaded && imageComponent}
      </div>
    );
  }
}

export default Home;
