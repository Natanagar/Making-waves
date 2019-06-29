import React from 'react';
import { connect } from 'react-redux';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import { getTracksFromServer } from './actions/index';
import Player from './components/Player/Player';
import './App.css';
// Player component will get props full of useful data!
const EnhancedPlayer = withSoundCloudAudio(Player);

const App = props => (
  <>
    <header>Audio player</header>
    <form>Autentification</form>
    <section>
      <form>
        <label htmlFor="track" />
        <input type="text" id="track" required defaultValue="Choose your favourite music" />
      </form>
      <form>
        <EnhancedPlayer
        clientId={String}
        resolveUrl={String}
        streamUrl={String}
        onStartTrack={Function}
        onStopTrack={Function}
        onReady={Function}
      />

      </form>
    </section>
  </>
);
const mapDispatchToProps = dispatch => ({
  getTracks: () => dispatch(getTracksFromServer),
});
export default connect(null, mapDispatchToProps)(App);
