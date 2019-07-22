import React from 'react';
import Button from '../../Button';
import MovieList from './MovieList';
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
      <div>
        <p>
          <mark>
            This is my special selection for us, even though we have watched some of them,
            I wouldn't care if we repeat <span role="img" aria-label="Hearted person">🥰</span>. It
            doesn't matter the order, as long as you want to watch all of them!
          </mark>
        </p>
        <p>
          <mark>
            I promise you won't regret it!            
          </mark>
        </p>
      </div>

      <MovieList movies={movies} />

      <div>
        <Button text="Let's do this!" onClick={() => { alert('finish!') }} variation="button--secondary"></Button>
      </div>
    </div>
  );
}

export default Movies;
