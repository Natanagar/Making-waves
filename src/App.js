import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>Audio player</header>
      <form>Autentification</form>
      <section>
        <form>
          <label htmlFor="track" />
          <input type="text" id="track" required defaultValue="Choose your favourite music" />
        </form>
        <form>
          <figure>
            <figcaption>Listen your favourite music</figcaption>
            <audio
              controls
              src="/media/examples/t-rex-roar.mp3"
            >
              Your browser does not support the
              <code>audio</code>
              element.
            </audio>
          </figure>

        </form>
      </section>
    </>
  );
}

export default App;
