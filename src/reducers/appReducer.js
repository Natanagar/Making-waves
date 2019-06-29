import { combineReducers } from 'redux';
import {
  FETCH_TRACKS_PENDING,
  FETCH_TRACKS_START,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_ERROR,

} from '../actions/index';

const initialState = Object.freeze({
  isLoading: false,
});


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRACKS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  appReducer,

});
export default rootReducer;
