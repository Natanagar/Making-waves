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
		const tokenSpotify = store.getState().appReducer.token;
		console.log(endpoint);
		return await axios.get('https://api.spotify.com/v1/me/player', {
			headers: {
				Authorization: `Bearer ${tokenSpotify}`
			}
		});
	};
}

export default Api;
