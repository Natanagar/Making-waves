import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from '@reach/router';
import { push } from 'redux-first-history';
import {
  PlayButton, Progress, Icons,
} from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import { getTracksFromServer } from './actions/index';
import LoginFormAuth from './components/Authentification/Login';
import RegisterFormHOC from './components/Authentification/Register';
import Player from './components/Player/Player';
import { reachHistory } from './store/index';
import './App.css';


const {
  SoundCloudLogoSVG,
  PlayIconSVG,
  PauseIconSVG,
  NextIconSVG,
  PrevIconSVG,
} = Icons;
const clientId = 'BeGVhOrGmfboy1LtiHTQF6Ejpt9ULJCI';
const resolveUrl = 'https://soundcloud.com/levohotnik/knockin-on-heavens-door';

// spotify
const id_spotify = '1b88dc822bcf411986df9f9776e72c3d';
const client_secret = 'b5325184d63e4264b07e6e3350ea7616';


const App = props => (
  <>


    <div>
      <header>
        <div>
          <nav>Audio player</nav>
          <Link to="/login">
            <ul>
              <li>Login</li>
            </ul>

          </Link>
        </div>
      </header>

    </div>
    <Router history={reachHistory}>
      <LoginFormAuth path="login" />
      <RegisterFormHOC path="register" />

    </Router>
    <div>
      <Player
        clientId={clientId}
        url={resolveUrl}
        streamUrl={String}
        onReady={() => {
          console.log('player url ready!');
        }}
      />
      <PlayButton
        className={String}
        playing={Boolean}
        seeking={Boolean}
        PlayIconSVG={PlayIconSVG}
        onTogglePlay={Function}
      />
      <Progress
        className={String}
        innerClassName={String}
        value={Number} // in range 0-100
        onSeekTrack={Function}
      />
    </div>
  </>
);
const mapDispatchToProps = dispatch => ({
  getTracks: () => dispatch(getTracksFromServer),
});
export default connect(null, mapDispatchToProps)(App);
