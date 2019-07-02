import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
  FETCH_TRACKS_PENDING,
  FETCH_TRACKS_START,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_ERROR,
  FIRSTAUTH_SPOTIFY_START,
  FIRSTAUTH_SPOTIFY_SUCCESS,
  FIRSTAUTH_SPOTIFY_ERROR,
  APP_TOKEN_SPOTIFY_STORE,
} from '../actions/index';

const initialState = Object.freeze({
  isLoading: false,
  isAuthStart: false,
  token: null,
  error: null,
  data: [],
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_TOKEN_SPOTIFY_STORE:
      return {
        ...state,
        token: action._token,
      };
    case FIRSTAUTH_SPOTIFY_START:
      return {
        ...state,
        isAuthStart: true,
      };
    case FIRSTAUTH_SPOTIFY_ERROR:
      return {
        ...state,
        isAuthStart: false,
        error: action.error,
      };
    case FIRSTAUTH_SPOTIFY_SUCCESS:
      return {
        ...state,
        isAuthStart: false,
        data: action.payload.data,
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
