import isEmpty from '../../Logics/utils.js/isEmpty';
import { SET_CURRENT_USER } from '../../actions/types';

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
		default:
			return state;
	}
};

export default authReducer;
