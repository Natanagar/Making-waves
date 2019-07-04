import Api from '../components/API/index';
import { Apikey } from '../components/API/keydata';

import store from '../store/index';

// actions from App
export const FETCH_TRACKS_START = 'FETCH_TRACKS_START';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR';

// token from Spotify to store
export const APP_TOKEN_SPOTIFY_STORE = 'APP_TOKEN_SPOTIFY_STORE';

// play track from Spotify
export const PLAYER_TRACK_SPOTIFY_START = 'PLAYER_TRACK_SPOTIFY_START';
export const PLAYER_TRACK_SPOTIFY_FETCH_START = 'PLAYER_TRACK_SPOTIFY_FETCH_START';
export const PLAYER_TRACK_SPOTIFY_FETCH_ERROR = 'PLAYER_TRACK_SPOTIFY_FETCH_ERROR';
export const PLAYER_TRACK_SPOTIFY_FETCH_SUCCESS = 'PLAYER_TRACK_SPOTIFY_FETCH_SUCCESS';
export const PLAYER_TRACK_SPOTIFY_PAUSE = 'PLAYER_TRACK_SPOTIFY_PAUSE';
export const PLAYER_TRACK_SPOTIFY_PREVIOUS_TRACK = 'PLAYER_TRACK_SPOTIFY_PREVIOUS_TRACK';
export const PLAYER_TRACK_SPOTIFY_NEXT_TRACK = 'PLAYER_TRACK_SPOTIFY_NEXT_TRACK';

export const getTracksFromServer = endpoint => (dispatch) => {
  dispatch({ type: 'FETCH_TRACKS_START' });
  const api = new Api();
  api
    .fetchTracksFromSpotify()
    .then(res => dispatch({
      type: 'FETCH_TRACKS_SUCCESS',
      payload: {
        tracks: res.data,
      },
    }))
    .catch(err => dispatch({ type: 'FETCH_TRACKS_ERROR', payload: err }));
};

export const startPlayTrackFromSpotify = endpoint => (dispatch) => {
  dispatch({ type: PLAYER_TRACK_SPOTIFY_FETCH_START });
  console.log(endpoint);
  const api = new Api();
  api
    .playTrackFromSpotify(endpoint)
    .then(res => console.log(res))
    .catch(err => dispatch({ type: 'PLAYER_TRACK_SPOTIFY_FETCH_ERROR', payload: err }));
};

export const putTokenToStore = token => ({
  type: 'APP_TOKEN_SPOTIFY_STORE',
  token,
});
