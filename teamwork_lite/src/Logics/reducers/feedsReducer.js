import isEmpty from '../../Logics/utils.js/isEmpty';
import { SET_IS_LOADING, SET_CLIENT_ERROR, FETCHING_FEEDS_SUCCESS, FETCHING_FEEDS_FAILURE } from '../../actions/types';
const initialState = {
	isloading: false,
	feeds: [],
	error: null
};

const feedsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_LOADING:
			return {
				...state,
				isloading: true,
				feeds: [],
				error: null
			};
			break;
		case SET_CLIENT_ERROR:
			return {
				...state,
				isloading: false,
				feeds: [],
				error: action.payload
			};
			break;
		case FETCHING_FEEDS_SUCCESS:
			return {
				...state,
				isloading: false,
				feeds: state.feeds.concat(action.payload),
				error: null
			};
			break;
		case FETCHING_FEEDS_FAILURE:
			return {
				...state,
				isloading: false,
				feeds: [],
				error: action.payload
			};
			break;
		default:
			return state;
			break;
	}
};

export default feedsReducer;
