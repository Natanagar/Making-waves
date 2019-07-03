import React from 'react';
import { connect } from 'react-redux';

export const Player = ({ items }) => {
  console.log(items);
  const option = {
    duration_ms: 0,
    is_playing: 'Paused',
    progress_ms: 0,
  };
  const backgroundStyles = {
    // backgroundImage: `url(${items.artists.images[0].url})`,
  };

  const progressBarStyles = {
    width: `${option.progress_ms * 100 / option.duration_ms}%`,
  };
  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="now-playing__img">
          {/* <img src={items.album.images[0].url} /> */}
        </div>
        <div className="now-playing__side">
          <div className="now-playing__name">Hura</div>
          <div className="now-playing__artist">
            {items}
          </div>
          <div className="now-playing__status">
            {option.is_playing ? 'Playing' : 'Paused'}
          </div>
          <div className="progress">
            <div
              className="progress__bar"
              style={progressBarStyles}
            />
          </div>
        </div>
        <div className="background" style={backgroundStyles} />
      </div>
    </div>
  );
};


const mapStateToProps = ({ appReducer }) => {
  const { token, tracks } = appReducer;
  const { items } = tracks;
  return {
    items,
  };
};
const mapDispatchToProps = dispatch => ({

});

export default connect(null, mapDispatchToProps)(Player);
