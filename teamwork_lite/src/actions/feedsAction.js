import { SET_IS_LOADING, SET_CLIENT_ERROR, FETCHING_FEEDS_SUCCESS, FETCHING_FEEDS_FAILURE } from './types';
const baseURL = 'https://teamwork-lite.herokuapp.com/api/v1';
const token = localStorage.jwtToken;

export const getFeeds = () => (dispatch) => {
	dispatch(isLoading());

	return fetch(`${baseURL}/feeds`, {
		headers: {
			authorization: `Bearer ${token}`
		}
	})
		.then((res) => res.json())
		.then((result) => {
			if (result.status === 'success') {
				console.log(result.data);
				dispatch(fetchingFeedsSuccess(result.data));
			} else {
				console.log(result.error);
				// dispatch(fetchingFeedsFailure(result.error));
			}
		})
		.catch((err) => {
			console.log('Error from client not having network', err.message);
			// dispatch(setClientError(err.message));
		});
};

export const isLoading = () => ({
	type: SET_IS_LOADING
});
export const fetchingFeedsSuccess = (feeds) => ({
	type: FETCHING_FEEDS_SUCCESS,
	payload: feeds
});
export const fetchingFeedsFailure = (error) => ({
	type: FETCHING_FEEDS_FAILURE,
	payload: error
});
export const setClientError = (err) => ({
	type: SET_CLIENT_ERROR
});
