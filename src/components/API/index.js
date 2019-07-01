import React from 'react';
import axios from 'axios';
import { Apikey } from './keydata';

class Api {
	constructor(endpoint, key, redirect_url, response_type, scope) {
		this.endpoint = endpoint;
		this.response_type = response_type;
		this.key = key;
		this.redirect_url = redirect_url;
		this.scope = scope;
	}
	//OAuth
	firstAuthorization = async (endpoint, key, response_type, redirect_url, scope) => {
		console.log(endpoint, key, response_type, redirect_url, scope)
		return await axios.get(`${endpoint}client_id=${key}&response_type=${response_type}&redirect_uri=${redirect_url}&scope=${scope}`);
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
