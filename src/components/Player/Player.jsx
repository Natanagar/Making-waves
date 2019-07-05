import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe';
import store from '../../store/index';
import { startPlayTrack } from '../../actions/index';


const InternalPlayer = ({ dispatch, playTrack, items }) => {
  items.map(item => console.log(item.artists[0].external_urls.spotify));
  const endpoint = items[0].external_urls.spotify;
  // console.log(endpoint);
  useEffect(() => store.dispatch(playTrack(endpoint)), []);

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
  console.log(items);
  return {
    items,
  };
};
const mapDispatchToProps = dispatch => ({
  playTrack: endpoint => dispatch(startPlayTrack),
});

export default connect(mapStateToProps, mapDispatchToProps)(InternalPlayer);
