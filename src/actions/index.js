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
export const PLAYER_UPLOAD_TRACK_START = 'PLAYER_UPLOAD_TRACK_START';
export const PLAYER_UPLOAD_TRACK_SUCCESS = 'PLAYER_UPLOAD_TRACK_SUCCESS';
export const PLAYER_UPLOAD_TRACK_PLAY = 'PLAYER_UPLOAD_TRACK_PLAY';
export const PLAYER_UPLOAD_TRACK_PAUSE = 'PLAYER_UPLOAD_TRACK_PAUSE';


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
export const startPlayTrack = endpoint => (dispatch) => {
  dispatch({ type: 'PLAYER_UPLOAD_TRACK_START' });
  return (
    console.log('HURA')
  );
};
export const putTokenToStore = token => ({
  type: 'APP_TOKEN_SPOTIFY_STORE',
  token,
});
