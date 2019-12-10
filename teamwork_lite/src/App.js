import React from 'react';
import store from './Logics/store';
import jwt_decode from 'jwt-decode';
import { HashRouter as Router, Route, Switch, history, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SET_AUTH } from './actions/types';
import './App.css';
import Nav from './components/Layout/Nav';
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
import LandingPage from './components/Layout/LandingPage';
import PrivateRoute from './components/common/PrivateRoute';
import Footer from './components/Layout/Footer';
import { setAuth, setCurrentUser, signOut } from './actions/authAction';
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

function App({ setAuth, setCurrentUser, signOut, history }) {
	if (localStorage.jwtToken) {
		const decoded = jwt_decode(localStorage.jwtToken);
		const currentTime = Date.now() / 1000;
		store.dispatch(setAuth());
		store.dispatch(setCurrentUser(decoded));
		if (decoded.exp < currentTime) {
			store.dispatch(signOut(history));
		}
	}
	return (
		<Router>
			<div className="App">
				<Nav />
				<Route exact path="/" component={LandingPage} />
				<Route path="/auth/signin" component={Signin} />
				<Switch>
					<PrivateRoute path="/auth/create-user" component={CreateUser} />
					<PrivateRoute path="/feeds" component={Feeds} />
					<PrivateRoute exact path="/articles/:articleId" component={Article} />
					<PrivateRoute path="/article" component={PostArticle} />
					<PrivateRoute path="/profile/edit/:userId" component={Edit} />
					<PrivateRoute path="/profile/create" component={CreateProfile} />
					<PrivateRoute path="/dashboard/:userId" component={Dashboard} />
					<PrivateRoute exact path="/gifs/:gifId" component={Gif} />
					<PrivateRoute path="/gifs/edit/:gifId" component={EditGif} />
					<PrivateRoute path="/gif" component={PostGif} />
					<PrivateRoute exact path="/profile/:userId" component={Profile} />
					<PrivateRoute path="/articles/edit/:articleId" component={EditArticle} />
				</Switch>
				{/* <Route exact path="/profile/:userId" component={Profile} /> */}
				{/* <Footer /> */}
			</div>
		</Router>
	);
}

export default connect(null, { setAuth, setCurrentUser, signOut })(App);
