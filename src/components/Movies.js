import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesToBeDisplayed = movies.map(movie => {
    return <div key={movie.title}>
        <h2>{movie.title}</h2>
        <p>{movie.time}</p>
        <ul>{movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}</ul>
      </div>
  });

  return <div>
    <h1>Movies Page</h1>
    {moviesToBeDisplayed}
  </div>;
}

export default Movies;