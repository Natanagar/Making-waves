import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Router, Link } from '@reach/router';
import { getTracksFromServer, putTokenToStore } from './actions/index';
import InternalPlayer from './components/Player/Player';
import { SoundPlayer } from './components/Player/CustomPlayer';
import { Apikey } from './components/API/keydata';
import store, { reachHistory } from './store/index';
import { hash } from './components/utils/index';
import './App.css';

const App = ({
  dispatch, getTracks, putToken, items,
}) => {
  const _token = hash.access_token;
  const {
    authEndpoint, clientId, redirectUri, scopes,
  } = Apikey;
  const [token, changeToken] = useState({});
  // token to local state
  const tokenToPersist = (_token) => {
    changeToken(_token);
  };
  useEffect(() => store.dispatch({ type: 'APP_TOKEN_SPOTIFY_STORE', _token }), []);
  useEffect(() => store.dispatch(getTracks()), []);
  // create button component with memoized callback
  const LoginSpotify = (dispatch) => {
    const handleClick = useCallback(
      // hardcore
      _token => store.dispatch({ type: 'APP_TOKEN_SPOTIFY_STORE', _token }),
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

  return (
    <div>
      <div>
        <header>
          <nav>Audio player</nav>
          <ul>
            {
              <li>
                {token && (<LoginSpotify path="/login" className="login" />) }
              </li>
                }
          </ul>

        </header>
      </div>
      <Router history={reachHistory}>
        <InternalPlayer
          path="/spotify"
          {...items}
        />
        <SoundPlayer path="player">CUSTOM</SoundPlayer>

      </Router>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto 50px',
      }}
      >
        <Link to="player">
          <button
            style={{
              margin: 'auto 50px',
            }}
            className="internal"
          >
          Player

          </button>
        </Link>
        <Link to="spotify">
          <button className="spotify">Spotify</button>

        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = ({ appReducer }) => {
  const { token, tracks } = appReducer;
  const { items } = tracks;
  return {
    token,
    items,
  };
};
const mapDispatchToProps = dispatch => ({
  getTracks: () => dispatch(getTracksFromServer),
  putToken: token => dispatch(putTokenToStore(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
