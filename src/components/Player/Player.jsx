import React from 'react';
import {
  PlayButton, Timer, VolumeControl, Progress, Icons,
} from 'react-soundplayer/components';

import { withSoundCloudAudio } from 'react-soundplayer/addons';

const {
  SoundCloudLogoSVG,
  PlayIconSVG,
  PauseIconSVG,
  NextIconSVG,
  PrevIconSVG,
} = Icons;

const Player = withSoundCloudAudio((props) => {
  const { trackTitle,
  } = props;

  return (
    <div className="custom-player">

      <PlayButton
        {...props}
      />
      <h2>{trackTitle}</h2>
      <VolumeControl
        className={String}
        buttonClassName={String}
        rangeClassName={String}
        volume={Number} // in range 0-1
        onVolumeChange={Function}
        onToggleMute={Function}
      />
      <Progress
        className={String}
        innerClassName={String}
        value={Number} // in range 0-100
        onSeekTrack={Function}
      />

      <Timer {...props} />
    </div>
  );
});
export default Player;
