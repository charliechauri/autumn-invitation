import React from 'react';
import IMovieList from './IMovieList';
import Movie from './Movie';

function MovieList({ movies }: IMovieList) {
  return (
    <ul className="movie-list">
      {movies.map(movie => (<Movie key={movie.name} {...movie}/>))}
    </ul>
  );
}

export default MovieList;
