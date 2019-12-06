import isEmpty from '../../Logics/utils.js/isEmpty';
import { SET_ARTICLES } from '../../actions/types';

const initialState = {
	article: {},
	articles: []
};

const articleReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ARTICLES:
			return Object.assign({}, state, {
				articles: state.articles.concat(action.payload)
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

export default articleReducer;
