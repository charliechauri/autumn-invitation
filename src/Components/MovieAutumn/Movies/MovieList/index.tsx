import React from 'react';
import IMovieList from './IMovieList';

function MovieList({ movies }: IMovieList) {
  return (
    <ul className="movie-list">
      {movies.map(movie => (<li key={movie.name} className="movie-list__item"> {movie.name} </li>))}
    </ul>
  );
}

export default MovieList;
