import Api from '../components/API/index';
import { Apikey } from '../components/API/keydata';


import store from '../store/index';

// actions from App
export const FETCH_TRACKS_PENDING = 'FETCH_TRACKS_PENDING';
export const FETCH_TRACKS_START = 'FETCH_TRACKS_START';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR';

// first auth
export const FIRSTAUTH_SPOTIFY_START = 'FIRSTAUTH_SPOTIFY_START';
export const FIRSTAUTH_SPOTIFY_SUCCESS = 'FIRSTAUTH_SPOTIFY_SUCCESS';
export const FIRSTAUTH_SPOTIFY_ERROR = 'FIRSTAUTH_SPOTIFY_ERROR';
//

export const testOAuth = () => (dispatch) => {
  dispatch({ type: 'FIRSTAUTH_SPOTIFY_START' });
  const api = new Api();
  const {
    endpoint, key, response_type, redirect_url, scope,
  } = Apikey;
  console.log(endpoint, key, response_type, redirect_url, scope);
  api
    .firstAuthorization(endpoint, key, response_type, redirect_url, scope)
    .then(res => console.log(res.data))
    .catch(err => dispatch({ type: 'FIRSTAUTH_SPOTIFY_ERROR', payload: err }));
};

export const getTracksFromServer = () => (dispatch) => {
  dispatch({ type: 'FETCH_CURRENCY_PENDING' });
  /* const api = new Api();
  const { endpoint } = keyData;
  const { key } = keyData;
  api
    .getTracks(endpoint, key)
    .then(res => dispatch({
      type: 'FETCH_TRACKS_SUCCESS',
      payload: {
        tracks: res.data.rates,
        //data: format(res.data.date, 'DD.MM.YYYY'),

      },
    }))
    .catch(err => dispatch({ type: 'FETCH_TRACKS_ERROR', payload: err })); */
};
