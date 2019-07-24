import React from 'react';
import IMovie from './IMovie';

function Movie({ name }: IMovie) {
  return (
    <li className="movie-list__item"> {name} </li>
  );
}

export default Movie;
