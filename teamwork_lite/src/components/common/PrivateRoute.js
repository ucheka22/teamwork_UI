import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			// Check if the user is authenticated,if authed view protected component
			auth.isAuthenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/auth/signin',
						state: { from: props.location } // if not authed, redirect to signin form but carry along the                                       //location the user wanted to visit which is put in the state
					}}
				/>
			)}
	/>
);
PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps)(PrivateRoute);
