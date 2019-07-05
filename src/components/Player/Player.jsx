import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Iframe from 'react-iframe';
import { startPlayTrack } from '../../actions/index';


const InternalPlayer = ({ dispatch, playTrack, items }) => {
  InternalPlayer.propTypes = {
    items: PropTypes.array,
    playTrack: PropTypes.func.isRequired,
  };
  return (
    <div className="player">
      <Iframe src="https://open.spotify.com/embed/album/6Ad1E9vl75ZB3Ir87zwXIJ" width="500" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" />
      <ul>
        { items
          ? items.map((item, id) => (
            <li key={id}>
              <img width="200" src={item.images[0].url} alt={item.name} />
              <h3>{item.name}</h3>
              <a href={`${item.artists[0].external_urls.spotify}`} />

            </li>
          )) : null
        }

      </ul>
    </div>
  );
};


const mapStateToProps = ({ appReducer }) => {
  const { tracks } = appReducer;
  const { items } = tracks;
  return {
    items,
  };
};
const mapDispatchToProps = dispatch => ({
  playTrack: endpoint => dispatch(startPlayTrack),
});

export default connect(mapStateToProps, mapDispatchToProps)(InternalPlayer);
