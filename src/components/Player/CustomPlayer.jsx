import React, { useState } from 'react';
import { connect } from 'react-redux';
import { InputTrack } from './Input';


// you can even use functional components!
export const SoundPlayer = (props) => {
  const [track, changeTrack] = useState(null);
  const [trackTitle, changeTitle] = useState('Upload track');
  const handleChangeInput = (event, value) => {
    const _track = URL.createObjectURL(event.target.files[0]);
    changeTitle(event.target.files[0].name);
    changeTrack(_track);
  };
  console.log(track);
  return (
    <>
      <InputTrack
        handleChangeInput={handleChangeInput}
      />
      <figure>
        <figcaption>{trackTitle}</figcaption>
        <audio
          controls
          src={track}
        />
      </figure>
    </>
  );
};
const mapDispatchToProps = dispatch => ({
  // uploadTrack: () => dispatch(uploadTrackFromFolder()),
});
export default connect(null, mapDispatchToProps)(SoundPlayer);
