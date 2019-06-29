import { store } from '../store/index';

// actions from App
export const FETCH_TRACKS_PENDING = 'FETCH_TRACKS_PENDING';
export const FETCH_TRACKS_START = 'FETCH_TRACKS_START';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR';

//
export const getTracksFromServer = () => store.dispatch((dispatch) => {
  dispatch({ type: 'FETCH_CURRENCY_PENDING' });
  /*const api = new Api();
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
});
