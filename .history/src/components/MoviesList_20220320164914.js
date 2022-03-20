import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.episode_id}
          title={movie.title}
          releaseDate={movie.release_Date}
          openingText={movie.opening_crawl}
        />
      ))}
    </ul>
  );
};

export default MovieList;
