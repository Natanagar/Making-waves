import React from 'react';
import axios from 'axios';
import store from '../../store/index';
import { Apikey } from './keydata';

class Api {
	constructor(endpoint, clientId) {
		this.clientId = clientId;
		this.endpoint = endpoint;
	}
	//fetch tracks from Spotify
	fetchTracksFromSpotify = async (endpoint) => {
		console.log(endpoint);
		const tokenSpotify = store.getState().appReducer.token;
		const headers = {
			Authorization: `Bearer ${tokenSpotify}`
		};

		console.log(endpoint, headers);
		return await axios.get('https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums', { headers });
	};
}

export default Api;

//https://api.spotify.com/v1/playlists/59ZbFPES4DQwEjBpWHzrtC

//https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10
//https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/top-tracks
//https://api.spotify.com/v1/albums/1vCWHaC5f2uS3yhpwWbIA6/tracks
