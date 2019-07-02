import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Router, Link } from '@reach/router';
import { push } from 'redux-first-history';
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import { getTracksFromServer, testOAuth } from './actions/index';
import LoginFormAuth from './components/Authentification/Login';
import RegisterFormHOC from './components/Authentification/Register';
import Player from './components/Player/Player';
import { reachHistory } from './store/index';
import './App.css';

const clientId = '1b88dc822bcf411986df9f9776e72c3d';
const redirectUri = 'http://localhost:3000/callback';
const scopes = [
  'streaming',
  'user-read-recently-played',
  'playlist-modify-public',
  'playlist-read-collaborative',
  'user-read-currently-playing',
  'user-read-playback-state',
];
const trackTitle = 'Достучаться до небес';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const streamUrl =	'https://p.scdn.co/mp3-preview/3eb16018c2a700240e9dfb8817b6f2d041f15eb1?cid=774b29d4f13844c495f206cafdad9c86';
console.log(clientId, redirectUri, scopes);

const {
  SoundCloudLogoSVG, PlayIconSVG, PauseIconSVG, NextIconSVG, PrevIconSVG,
} = Icons;

// Get the hash of the url
const hash = window.location.hash.substring(1).split('&').reduce((initial, item) => {
  if (item) {
    const parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});

const App = ({ startAuth, dispatch }) => {
  const [token, changeToken] = useState({});
  const _token = hash.access_token;
  useEffect(() => {
    console.log(_token);
  });

  // create button component with memoized callback
  const LoginSpotify = ({ dispatch, _token }) => {
    const handleClick = useCallback(
      () => {
        console.log(_token);
      },
      [],
    );


    return (
      <div>
        <a
          className="login"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`}
        >
											Login to Spotify
        </a>
      </div>
    );
  };
  const tokenToPersist = () => {
    changeToken(_token);
  };
  /* if (_token) {
    changeToken(_token);
  } */
  useEffect(() => tokenToPersist(_token),
  /* startAuth(), */ []);
  console.log(token);
  return (
    <div>
      <div>
        <header>
          <div>
            <nav>Audio player</nav>
            {/* <Link to="/login"> */}

            <ul>
              {
                <li>
                  {token && (<LoginSpotify />) }

                </li>
                }
              {/* <li>Login</li> */}
            </ul>
            {/* </Link> */}
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
    </div>
  );
};
const mapStateToProps = ({ appReducer, form }) => ({});
const mapDispatchToProps = dispatch => ({
  getTracks: () => dispatch(getTracksFromServer),
  startAuth: () => dispatch(testOAuth),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
