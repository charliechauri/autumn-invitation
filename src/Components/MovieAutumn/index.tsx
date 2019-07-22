import React, { useState } from 'react';
import Button from '../Button';
import Movies from './Movies';

function MovieAutumn() {
  const [shouldDisplayMovies, displayMovies] = useState(false);

  return (
    <div>
      <h1>
        Would you like to share a movie autumn with me?
      </h1>

      <Button text="YES!" onClick={() => displayMovies(true)} />

      {shouldDisplayMovies && <Movies />}
    </div>
  );
}

export default MovieAutumn;
