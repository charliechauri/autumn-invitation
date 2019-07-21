import React, { useState } from 'react';
import './App.css';
import Heart from './Components/Heart';
import MovieAutumn from './Components/MovieAutumn';

function App() {
  const [displayMessage, toggleDisplayMessage] = useState(false);

  return (
    <div className="App">
      <section className="main-content">
        <Heart
          isAnimated={!displayMessage}
          size={displayMessage ? 'small': 'big'}
          onClick={() => { toggleDisplayMessage(!displayMessage) }}
        />

        {displayMessage && <MovieAutumn />}
      </section>
    </div>
  );
}

export default App;
