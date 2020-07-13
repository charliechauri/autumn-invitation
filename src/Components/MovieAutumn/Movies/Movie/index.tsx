import React from 'react';
import IMovie from './IMovie';

function Movie(movie: IMovie) {
  return (
    <article className="movie-list__item">
      <h3>{movie.name}</h3>
    </article>
  );
}

export default Movie;
