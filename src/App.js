import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Link } from '@reach/router';
import { push } from 'redux-first-history';
import {
  PlayButton, Progress, Icons,
} from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import { getTracksFromServer, testOAuth } from './actions/index';
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

// soundcloud
const clientId = 'BeGVhOrGmfboy1LtiHTQF6Ejpt9ULJCI';
const resolveUrl = 'https://soundcloud.com/levohotnik/knockin-on-heavens-door';
const streamUrl = 'https://p.scdn.co/mp3-preview/3eb16018c2a700240e9dfb8817b6f2d041f15eb1?cid=774b29d4f13844c495f206cafdad9c86';
const trackTitle = 'Достучаться до небес';


const App = ({ startAuth, dispatch }) => {
  useEffect(() => startAuth(), []);
  return (
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

          trackTitle={trackTitle}
          preloadType="metadata"
          streamUrl={streamUrl}
          onReady={() => {
            console.log('player url ready!');
          }}
        />
      </div>
    </>
  );
};
const mapStateToProps = ({ appReducer, form }) => ({

});
const mapDispatchToProps = dispatch => ({
  getTracks: () => dispatch(getTracksFromServer),
  startAuth: () => dispatch(testOAuth),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
