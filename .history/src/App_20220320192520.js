import React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { useState } from "react";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState();

  const fetchMovieHandler = async () => {
    setIsLoading(true); // loading indication variable

    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    const transformedData = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.releaseDate,
      };
    });

    setMovies(transformedData);

    setIsLoading(false); // loading indication variable
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{!isLoading && <MoviesList movies={movies}/>}</section>
    </React.Fragment>
  );
}

export default App;
