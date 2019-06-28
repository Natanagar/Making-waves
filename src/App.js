import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>Audio player</header>
      <section>
        <form>
          <label htmlFor="track" />
          <input type="text" id="track" required defaultValue="Choose your favourite music" />
        </form>
        <form>
          <label />
          <audio>
            <input />
          </audio>
        </form>
      </section>
    </>
  );
}

export default App;
