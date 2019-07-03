import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
  FETCH_TRACKS_START,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_ERROR,
  APP_TOKEN_SPOTIFY_STORE,
} from '../actions/index';

const initialState = Object.freeze({
  isLoading: false,
  isAuthStart: false,
  token: null,
  error: null,
  tracks: [],
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_TOKEN_SPOTIFY_STORE:
      return {
        ...state,
        token: action._token,
      };
    case FETCH_TRACKS_START:
      return {
        ...state,
        isAuthStart: true,
      };
    case FETCH_TRACKS_ERROR:
      return {
        ...state,
        isAuthStart: false,
        error: action.error,
      };
    case FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        isAuthStart: false,
        tracks: action.payload.tracks,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  appReducer,
  // form reducer
  form: formReducer,
});
export default rootReducer;
