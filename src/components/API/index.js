import React from 'react';
import axios from 'axios';
import store from '../../store/index';
import { Apikey } from './keydata';
import { async } from 'q';

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
		return await axios.get(
			'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?offset=0&limit=20&include_groups=album,single,compilation,appears_on',
			{ headers }
		);
	};
	playTrackFromSpotify = async (endpoint) => {
		const tokenSpotify = store.getState().appReducer.token;
		const headers = {
			Authorization: `Bearer ${tokenSpotify}`
		};
		return await axios.put('https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/player/play', { headers });
	};
}

export default Api;

//https://api.spotify.com/v1/playlists/59ZbFPES4DQwEjBpWHzrtC

//https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10
//https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/top-tracks
//https://api.spotify.com/v1/albums/1vCWHaC5f2uS3yhpwWbIA6/tracks
//https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?offset=0&limit=20&include_groups=album,single,compilation,appears_on
//https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums
//curl -X "PUT" "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/player/play"
//--data "{\"context_uri\":\"spotify:album:5ht7ItJgpBH7W6vJ5BqpPr\",\"offset\":{\"position\":5},\"position_ms\":0}" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAKZKdjuHmzKnkv0b0LZAxBo_s6gJidpuHdKVxUoJ9…00PXv8ug7vMwdmIA5C3VulFAowj1KOw2Rj6L3kfOmSv-lVojA"
