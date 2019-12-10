import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, SET_AUTH } from './types';

const baseURL = 'https://teamwork-lite.herokuapp.com/api/v1';
// const baseURL = 'http://localhost:3030/api/v1';

export const signInUser = (userDetails, location, history) => (dispatch) => {
	const { from } = location.state || { from: { pathname: '/feeds' } };

	return fetch(`${baseURL}/auth/signin`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(userDetails)
	})
		.then((res) => {
			return res.json();
		})
		.then((result) => {
			if (result.status === 'success') {
				const { token } = result.data;
				localStorage.setItem('jwtToken', token);

				// Decode the logged in user
				const decoded = jwt_decode(token);
				dispatch(setCurrentUser(decoded));
				history.push(`${from.pathname}`);
			}
		})
		.catch((err) => {
			dispatch({ type: GET_ERRORS, payload: err });
		});
};

export const createUser = (userDetails) => (dispatch) => {
	// SET AUTHORIZATION HEADER
	const token = localStorage.getItem('jwtToken');
	return fetch(`${baseURL}/auth/create-user`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			authorization: `Bearer ${token}`
		},
		body: JSON.stringify(userDetails)
	})
		.then((res) => {
			return res.json();
		})
		.then((result) => {
			console.log(result);
			if (result.status === 'success') {
				// history.push(`${from.pathname}`);
			}
		})
		.catch((err) => {
			console.log(err);
			// dispatch({ type: GET_ERRORS, payload: err });
		});
};

export const setAuth = () => {
	return {
		type: SET_AUTH
	};
};
export const signOut = (history) => (dispatch) => {
	//Remove token from localStorage
	localStorage.removeItem('jwtToken');
	// Set current user to {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
	window.location.href = '/auth/signin';
};
export const setCurrentUser = (decodedUser) => {
	return {
		type: SET_CURRENT_USER,
		payload: decodedUser
	};
};
