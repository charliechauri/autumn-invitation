import React from 'react';
import Button from '../../Button';
import MovieList from './MovieList';
import MoviesHeader from './MoviesHeader';
import MoviesDescription from './MoviesDescription';
import movies from './movies';
import './index.css';

function Movies() {
  return (
    <div className="movies">

      <MoviesHeader />

      <MoviesDescription />

      <MovieList movies={movies} />

      <div>
        <Button text="Let's do this!" onClick={() => { alert('finish!') }} variation="button--secondary"></Button>
      </div>
    </div>
  );
}

export default Movies;
