import React from 'react';
import Button from '../../Button';
import MovieList from './MovieList';
import MoviesDescription from './MoviesDescription';
import movies from './movies';
import './index.css';

function Movies() {
  return (
    <div className="movies">
      <h2>
        <mark>
          Movie Autumn 2019 <span role="img" aria-label="film">🎬</span>
          <span role="img" aria-label="party popper">🎉</span>
        </mark>
      </h2>

      <MoviesDescription />

      <MovieList movies={movies} />

      <div>
        <Button text="Let's do this!" onClick={() => { alert('finish!') }} variation="button--secondary"></Button>
      </div>
    </div>
  );
}

export default Movies;
