import {
  PLAYER_UPLOAD_TRACK_START,
  PLAYER_UPLOAD_TRACK_SUCCESS,
  PLAYER_UPLOAD_TRACK_PLAY,
  PLAYER_UPLOAD_TRACK_PAUSE,

} from '../actions/index';
// initial state
const initialState = Object.freeze({
  track: null,
  isLoading: false,
  playing: false,
});

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_UPLOAD_TRACK_START:
      return {
        ...state,
        isLoading: true,
      };
    case PLAYER_UPLOAD_TRACK_PLAY:
      return {
        ...state,
        playing: true,
      };

    default:
      return state;
  }
};
