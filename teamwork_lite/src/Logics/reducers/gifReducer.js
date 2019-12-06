import isEmpty from '../../Logics/utils.js/isEmpty';
import { SET_GIFS } from '../../actions/types';

const initialState = {
	gif: {},
	gifs: []
};

const gifReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_GIFS:
			return Object.assign({}, state, {
				gifs: state.gifs.concat(action.payload)
			});
		// return {
		// 	...state,
		// 	articles: state.articles.concat(action.payload)
		// 	// isAuthenticated: !isEmpty(action.payload),
		// 	// // redirectToReferrer: !isEmpty(action.payload),
		// };
		default:
			return state;
	}
};

export default gifReducer;
