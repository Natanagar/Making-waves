import {
  PLAYER_TRACK_SPOTIFY_START,
  PLAYER_TRACK_SPOTIFY_FETCH_ERROR,
  PLAYER_TRACK_SPOTIFY_FETCH_SUCCESS,
  PLAYER_TRACK_SPOTIFY_PAUSE,
  PLAYER_TRACK_SPOTIFY_PREVIOUS_TRACK,
  PLAYER_TRACK_SPOTIFY_NEXT_TRACK,

} from '../actions/index';

const initialState = Object.freeze({
  track: null,
  error: null,
  isLoading: false,
});

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_TRACK_SPOTIFY_START:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
