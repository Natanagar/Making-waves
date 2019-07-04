import React from 'react';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import { InputTrack } from './Input'

const clientId = 'YOUR CLIENT ID';
const resolveUrl = 'https://soundcloud.com/ksmtk/chronemics';

// you can even use functional components!
export const CustomPlayer = withSoundCloudAudio((props) => {
  const { soundCloudAudio, playing, track } = props;
  const play = () => {
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play();
    }
  };

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <section>
          <InputTrack />
          <div>
      <h2>{track.title}</h2>
      <h3>{track.user.username}</h3>
      <button onClick={() => play()}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
        </section>
  );
});
