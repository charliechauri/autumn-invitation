import React from 'react';
import Button from '../../Button';
import Movie from './Movie';
import MoviesHeader from './MoviesHeader';
import MoviesDescription from './MoviesDescription';
import movies from './movies';
import './index.css';

function Movies() {
  return (
    <div className="movies">

      <MoviesHeader />

      <MoviesDescription />

      <section>
        {movies.map(movie => <Movie {...movie} />)}
      </section>

      <section>
        <Button text="Let's do this!" onClick={() => { alert('finish!') }} variation="button--secondary"></Button>
      </section>
    </div>
  );
}

export default Movies;
