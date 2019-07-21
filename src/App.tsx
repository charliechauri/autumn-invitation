import React, { useState } from 'react';
import './App.css';
import Heart from './Components/Heart';
import Button from './Components/Button';

function App() {
  const [displayMessage, toggleDisplayMessage] = useState(false);
  const [displayMovies, toggleDisplayMovies] = useState(false);

  return (
    <div className="App">
      <section className="main-content">
        <Heart
          isAnimated={!displayMessage}
          size={displayMessage ? 'small': 'big'}
          onClick={() => { toggleDisplayMessage(!displayMessage) }}
        />

        {displayMessage &&
          <div>
            <h1>
              Would you like to share a movie autumn together?
            </h1>

            <Button text="YES!" onClick={ () => { toggleDisplayMovies(!displayMovies) } } />
          </div>}
      </section>
    </div>
  );
}

export default App;
