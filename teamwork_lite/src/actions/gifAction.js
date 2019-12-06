import { SET_GIFS, POST_GIF } from './types';
const baseURL = 'https://teamwork-lite.herokuapp.com/api/v1';

export const postGif = (gif, history) => (dispatch) => {
	const token = localStorage.getItem('jwtToken');
	const formData = new FormData();
	formData.append('title', gif.title);
	formData.append('image', gif.image);
	return fetch(`${baseURL}/gifs`, {
		method: 'POST',
		headers: {
			// 'content-type': 'multipart/form-data',
			authorization: `Bearer ${token}`
		},
		body: formData
	})
		.then((res) => {
			return res.json();
		})
		.then((result) => {
			if (result.status === 'success') {
				console.log(result);
				dispatch(setGif(gif));
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

export const setGif = (gif) => {
	return {
		type: SET_GIFS,
		payload: gif
	};
};
