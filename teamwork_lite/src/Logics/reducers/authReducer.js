import isEmpty from '../../Logics/utils.js/isEmpty';
import { SET_CURRENT_USER, SET_AUTH } from '../../actions/types';

const initialState = {
	isAuthenticated: false,
	// redirectToReferrer: false,
	user: {}
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				// redirectToReferrer: !isEmpty(action.payload),
				user: action.payload
			};
		case SET_AUTH:
			return {
				...state,
				isAuthenticated: true
			};
		default:
			return state;
	}
};

export default authReducer;
