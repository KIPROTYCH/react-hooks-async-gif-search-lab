import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  componentDidMount() {
    // Fetch initial data when the component mounts
    this.handleFetchGifs("dolphin"); // You can set a default search query here
  }

  handleFetchGifs = (query) => {
    // Fetch data from your local JSON Server instead of the Giphy API
    fetch(`http://localhost:8001/data?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        const gifs = data.slice(0, 3); // Store the first 3 gifs in the state
        this.setState({ gifs });
      })
      .catch((error) => console.error("Error fetching gifs:", error));
  };

  render() {
    return (
      <div>
        <GifSearch handleFetchGifs={this.handleFetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
