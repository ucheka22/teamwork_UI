import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import articleReducer from './reducers/articleReduer';
import errorReducer from './reducers/errorReducer';
import gifReducer from './reducers/gifReducer';
export default combineReducers({
	auth: authReducer,
	articles: articleReducer,
	gifs: gifReducer,
	errors: errorReducer
});
