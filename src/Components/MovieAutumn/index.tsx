import React, { useState } from 'react';
import Button from '../Button';

function MovieAutumn() {
  const [shouldDisplayMovies, displayMovies] = useState(false);

  return (
    <div>
      <h1>
        Would you like to share a movie autumn with me?
      </h1>

      <Button text="YES!" onClick={() => displayMovies(true)} />


      {shouldDisplayMovies &&
        <ul>
          <li>
            Movies 1...
          </li>
        </ul>}
    </div>
  );
}

export default MovieAutumn;
