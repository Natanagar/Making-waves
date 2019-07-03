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
		const headers = {
			Authorization: `Bearer ${tokenSpotify}`
		};

		console.log(endpoint, headers);
		return await axios.get(
			'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10',
			{ headers }
		);
	};
}

export default Api;

//curl -i -H "Authorization: "Bearer BQB72l7sk5qATCU8Sio-7kWeWtA0EHN4WFK5JS-K1uQYzV7slEUiK1F7LTu9_bJt8GOIzX0F6xgF3Vx-6L_q8LY3pIqeeNwpjgGrj7H9mV4ic4P5Wb4tfB59n0dp3O2-wQO8XS-Q1R3a7LVdJSd87OSvp5bKqyid1pkfMcskDz4l7jGDkPkRb3BW2GB3WwZT_f30NmQLkVQlb7bdHQy47G2xAASjaQ"" -X GET https://api.spotify.com/v1/me
