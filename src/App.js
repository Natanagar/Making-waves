import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Router, Link } from '@reach/router';
import { push } from 'redux-first-history';
import { getTracksFromServer, putTokenToStore } from './actions/index';
import LoginFormAuth from './components/Authentification/Login';
import RegisterFormHOC from './components/Authentification/Register';
import { Player } from './components/Player/Player';
import { Apikey } from './components/API/keydata';
import store, { reachHistory } from './store/index';


import './App.css';


// Get the hash of the url
const hash = window.location.hash.substring(1).split('&').reduce((initial, item) => {
  if (item) {
    const parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});

const App = ({
  startAuth, dispatch, getTracks, putToken, items,
}) => {
  // items.map(item => console.log(Object.entries(item.external_urls)[0][1]));

  const {
    authEndpoint, clientId, redirectUri, scopes,
  } = Apikey;
  const [token, changeToken] = useState({});
  const _token = hash.access_token;


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
          <div>
            <nav>Audio player</nav>
            <ul>
              {
                <li>
                  {token && (<LoginSpotify />) }

                </li>
                }
            </ul>
          </div>
        </header>
      </div>
      <Router history={reachHistory}>
        <LoginFormAuth path="login" />
        <RegisterFormHOC path="register" />
      </Router>
      <div>
        <ul>
          {
            items.map((item, id) => (
              <li key={id}>
                <img src={item.images[0].url} alt={item.name} />
                <h3>{item.name}</h3>
              </li>
            ))
        }

        </ul>
        <Player
          {...items}
        />
      </div>
    </div>
  );
};
const mapStateToProps = ({ appReducer, form }) => {
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
