import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../../store/index';
import { startPlayTrackFromSpotify } from '../../actions/index';


const Player = ({ dispatch, playTrack, items }) => {
  items.map(item => console.log(Object.entries(item.external_urls)[0][1]));
  const endpoint = items[0].external_urls.spotify;
  console.log(endpoint);
  useEffect(() => store.dispatch(playTrack(endpoint)), []);
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
          {/* <img src={itemsSp.images[0].url} /> */}
        </div>
        <div className="now-playing__side">
          <div className="now-playing__name">Hura</div>
          <div className="now-playing__artist">
            IFRAME
            <iframe src="https://open.spotify.com/embed/track/1q8gelFgFYUwoWpQV7WNCe" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
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
  const { tracks } = appReducer;
  const { items } = tracks;
  console.log(items);
  return {
    items,
  };
};
const mapDispatchToProps = dispatch => ({
  playTrack: endpoint => dispatch(startPlayTrackFromSpotify),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
