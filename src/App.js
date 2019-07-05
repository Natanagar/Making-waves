import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Router, Link } from '@reach/router';
import PropTypes from 'prop-types';
import { getTracksFromServer, putTokenToStore } from './actions/index';
import InternalPlayer from './components/Player/Player';
import SoundPlayer from './components/Player/CustomPlayer';
import { Apikey } from './components/API/keydata';
import store, { reachHistory } from './store/index';
import { hash } from './components/utils/index';
import './App.css';

const App = ({
  dispatch, getTracks, putToken, items,
}) => {
  App.propTypes = {
    items: PropTypes.array,
    getTracks: PropTypes.func.isRequired,
    putToken: PropTypes.func.isRequired,
  };
  // token from url spotify
  const _token = hash.access_token;

  // data to convert endpoint to Spotify login
  const {
    authEndpoint, clientId, redirectUri, scopes,
  } = Apikey;
  // add token to local state
  const [token, changeToken] = useState({});
  const tokenToPersist = (_token) => {
    changeToken(_token);
  };
  // token to persist (localStorage)
  useEffect(() => store.dispatch({ type: 'APP_TOKEN_SPOTIFY_STORE', _token }), []);
  // fetch tracks to spotify
  useEffect(() => store.dispatch(getTracks()), []);
  // create button component with memoized callback
  const LoginSpotify = (dispatch) => {
    const handleClick = useCallback(
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
            {<li>{token && (<LoginSpotify path="/login" className="login" />) }</li>}
          </ul>
        </header>
      </div>
      <Router history={reachHistory}>
        <InternalPlayer
          path="/spotify"
          {...items}
        />
        <SoundPlayer path="player" />

      </Router>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto 50px',
      }}
      >
        <Link to="player">
          <button style={{ margin: 'auto 50px' }} className="internal">Player</button>
        </Link>
        <Link to="spotify"><button className="spotify">Spotify</button></Link>
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
