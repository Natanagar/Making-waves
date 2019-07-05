import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../store/index';
import { InputTrack } from './Input';
import { startPlayTrack } from '../../actions/index';


// you can even use functional components!
export const SoundPlayer = ({ track, dispatch, playAudio }) => {
  SoundPlayer.propTypes = {
    track: PropTypes.object,
    playAudio: PropTypes.func.isRequired,
  };
  const [audio, changeTrack] = useState(null);
  const [trackTitle, changeTitle] = useState('Upload track');
  const handleChangeInput = (event, dispatch) => {
    store.dispatch({ type: 'PLAYER_UPLOAD_TRACK_START' });
    const _track = URL.createObjectURL(event.target.files[0]);
    store.dispatch(playAudio(_track));
    changeTitle(event.target.files[0].name);
    changeTrack(_track);
  };
  return (
    <>
      <InputTrack
        handleChangeInput={handleChangeInput}
      />
      <figure>
        <figcaption>{trackTitle}</figcaption>
        <audio
          onClick={e => dispatch({ type: 'PLAYER_UPLOAD_TRACK_PLAY' })}
          controls
          src={audio}
        />
      </figure>
    </>
  );
};
const mapStateToProps = ({ appReducer, playerReducer }) => {
  const { track } = playerReducer;
  return {
    track,
  };
};
const mapDispatchToProps = dispatch => ({
  playAudio: audio => dispatch(startPlayTrack(audio)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SoundPlayer);
