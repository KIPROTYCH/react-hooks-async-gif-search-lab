import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  componentDidMount() {
    this.fetchGifs("dolphin"); // Default search query on initial load
  }

  fetchGifs = (query) => {
    const API_KEY = "YOUR_API_KEY_HERE";
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          gifs: data.data.slice(0, 3), // Storing only the first 3 gifs in the state
        });
      })
      .catch((error) => console.error("Error fetching gifs:", error));
  };

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
