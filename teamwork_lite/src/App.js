import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Signin from './components/auth/Signin';
import CreateUser from './components/auth/CreateUser';
import Feeds from './components/feeds/Feeds';
import Article from './components/Articles/Article';
import PostArticle from './components/Articles/PostArticle';
import Edit from './components/profile/Edit';
import CreateProfile from './components/profile/CreateProfile';
import PostGif from './components/gifs/PostGif';
import Profile from './components/profile/Profile';
import Dashboard from './components/profile/Dashboard';
import EditArticle from './components/Articles/EditArticle';
import Gif from './components/gifs/Gif';
import EditGif from './components/gifs/EditGif';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
	faAt,
	faSearch,
	faUser,
	faBars,
	faCheck,
	faHardHat,
	faThumbsDown,
	faThumbsUp,
	faCaretDown,
	faLock,
	faBuilding,
	faAddressBook,
	faMale,
	faFlag,
	faCommentAlt,
	faMapMarker
} from '@fortawesome/free-solid-svg-icons';

library.add(
	fab,
	faMapMarker,
	faSearch,
	faFacebook,
	faTwitter,
	faInstagram,
	faCommentAlt,
	faFlag,
	faLock,
	faAt,
	faBars,
	faCheck,
	faThumbsDown,
	faHardHat,
	faThumbsUp,
	faUser,
	faCaretDown,
	faMale,
	faBuilding,
	faAddressBook
);

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route path="/auth/create-user" component={CreateUser} />
				<Route path="/auth/signin" component={Signin} />
				<Route path="/feeds" component={Feeds} />
				<Route exact path="/articles/:articleId" component={Article} />
				<Route path="/article" component={PostArticle} />
				<Route path="/articles/edit/:articleId" component={EditArticle} />
				<Route path="/gif" component={PostGif} />
				<Route path="/profile/edit/:userId" component={Edit} />
				<Route path="/profile/create" component={CreateProfile} />
				<Route path="/profile/:userId" component={Profile} />
				<Route path="/dashboard/:userId" component={Dashboard} />
				<Route exact path="/gifs/:gifId" component={Gif} />
				<Route path="/gifs/edit/:gifId" component={EditGif} />
				{/* 
				
		
				
				 */}
			</div>
		</Router>
	);
}

export default App;
