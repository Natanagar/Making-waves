import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from '@reach/router';

import { withSoundCloudAudio } from 'react-soundplayer/addons';
import { getTracksFromServer } from './actions/index';
import Player from './components/Player/Player';
import './App.css';
// Player component will get props full of useful data!
const EnhancedPlayer = withSoundCloudAudio(Player);

const App = props => (
  <>


    <div>
      <header>
        <div>
          <nav>Audio player</nav>
          <Link to="login">
            <ul>
              <li>Login</li>
            </ul>

          </Link>
        </div>
      </header>
      <EnhancedPlayer
        clientId={String}
        resolveUrl={String}
        streamUrl={String}
        onStartTrack={Function}
        onStopTrack={Function}
        onReady={Function}
      />
    </div>
    <Router>
      <form path="autentification">
        {/* create wizard form for authentification */}
Autentification
        <Link to="login"><button>Confirm</button></Link>
      </form>

      <section path="login">
        <header>Audioplayer</header>
        <form>
          <label htmlFor="track" />
          <input type="text" id="track" required defaultValue="Choose your favourite music" />
        </form>
      </section>

    </Router>
  </>
);
const mapDispatchToProps = dispatch => ({
  getTracks: () => dispatch(getTracksFromServer),
});
export default connect(null, mapDispatchToProps)(App);
