import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import articleReducer from './reducers/articleReduer';
import gifReducer from './reducers/gifReducer';
import feedsReducer from './reducers/feedsReducer';
export default combineReducers({
	auth: authReducer,
	articles: articleReducer,
	gifs: gifReducer,
	posts: feedsReducer
});
