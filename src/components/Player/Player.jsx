import React from 'react';
import { connect } from 'react-redux';
import store from '../../store/index';

export const Player = ({ items }) => {
  const itemsSp = store.getState().appReducer.tracks;
  console.log(itemsSp);
  const option = {
    duration_ms: 0,
    is_playing: 'Paused',
    progress_ms: 0,
  };
  const backgroundStyles = {
    // backgroundImage: `url(${itemsSp})`,
  };

  const progressBarStyles = {
    width: `${option.progress_ms * 100 / option.duration_ms}%`,
  };
  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="now-playing__img">
          {/*<img src={itemsSp.images[0].url} /> */}
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
  console.log(appReducer);
  const { token, tracks } = appReducer;
  const { items } = tracks;
  return {
    items,
  };
};
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
