import React from "react";

const GifList = ({ gifs }) => {
  return (
    <ul>
      {gifs.map((gif) => (
        <li key={gif.id}>
          <img src={gif.images.original.url} alt="Gif" />
        </li>
      ))}
    </ul>
  );
};

export default GifList;
