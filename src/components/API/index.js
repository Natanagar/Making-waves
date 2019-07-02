import React from 'react';
import axios from 'axios';
import { Apikey } from './keydata';

class Api {
	constructor(authEndpoint, key, redirectUri, code, response_type, scope, endpoint_request, grant_type) {
		this.endpoint_request = endpoint_request;
		this.grant_type = grant_type;
		this.authEndpoint = authEndpoint;
		this.response_type = response_type;
		this.key = key;
		this.redirectUri = redirectUri;
		this.scope = scope;
		this.code = code;
	}
	//OAuth
	firstAuthorization = async (authEndpoint, code, grant_type, redirect_url) => {
		console.log(authEndpoint, code, grant_type, redirect_url);
		return await axios.post(
			`https://accounts.spotify.com/api/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect_url}`,
			{
				headers: {
					Authorization:
						'MWI4OGRjODIyYmNmNDExOTg2ZGY5Zjk3NzZlNzJjM2Q6YjUzMjUxODRkNjNlNDI2NGIwN2U2ZTMzNTBlYTc2MTY='
				}
			}
		);
	};
	// fetch data for cross-course
	getCrossCurrency = async (endpoint) => {
		return await axios.get(endpoint);
	};
	//fetch rating as at
	getCurrencyByDate = async (nextEndpoint, date) => {
		return await axios.get(`${nextEndpoint}`);
	};
	//fetch historical rating of currency
	getHistoricalRating = async (nextEndpoint) => {
		return await axios.get(`${nextEndpoint}`);
	};
}

export default Api;
