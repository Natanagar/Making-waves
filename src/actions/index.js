import Api from '../components/API/index';
import { Apikey } from '../components/API/keydata';

import store from '../store/index';

// actions from App
export const FETCH_TRACKS_START = 'FETCH_TRACKS_START';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR';

// token from Spotify to store
export const APP_TOKEN_SPOTIFY_STORE = 'APP_TOKEN_SPOTIFY_STORE';

/* getCurrentlyPlaying(token) {
  // Make a call using the token
  $.ajax({
    url: "https://api.spotify.com/v1/me/player",
    type: "GET",
    beforeSend: (xhr) => {
      xhr.setRequestHeader("Authorization", "Bearer " + token);
    },
    success: (data) => {
      this.setState({
        item: data.item,
        is_playing: data.is_playing,
        progress_ms: data.progress_ms,
      });
    }
  });
} */
export const getTracksFromServer = endpoint => (dispatch) => {
  dispatch({ type: 'FETCH_TRACKS_START' });
  const api = new Api();
  api
    .fetchTracksFromSpotify(endpoint)
    .then(
      res => console.log(
          res.data,
        ), /* dispatch({
        type: 'FETCH_TRACKS_SUCCESS',
        payload: {
          tracks: res.data.rates,
          // data: format(res.data.date, 'DD.MM.YYYY'),
        },
      }), */
    )
    .catch(err => dispatch({ type: 'FETCH_TRACKS_ERROR', payload: err }));
};

export const putTokenToStore = token => ({
  type: 'APP_TOKEN_SPOTIFY_STORE',
  token,
});
