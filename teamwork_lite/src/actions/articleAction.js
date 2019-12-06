import { SET_ARTICLES } from './types';
const baseURL = 'https://teamwork-lite.herokuapp.com/api/v1';

export const postArticle = (article, history) => (dispatch) => {
	const token = localStorage.getItem('jwtToken');
	return fetch(`${baseURL}/articles`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			authorization: `Bearer ${token}`
		},
		body: JSON.stringify(article)
	})
		.then((res) => {
			return res.json();
		})
		.then((result) => {
			if (result.status === 'success') {
				// console.log(result);
				dispatch(setArticle(article));
				history.push(`/feeds`);
			} else {
				console.log(result);
			}
		})
		.catch((err) => {
			console.log(err);
			// dispatch({ type: GET_ERRORS, payload: err });
		});
};

export const setArticle = (article) => {
	return {
		type: SET_ARTICLES,
		payload: article
	};
};
