import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInUser } from '../../actions/authAction';
import useForm from '../helpers/Useform';
import styled from './auth.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Signin = ({ signInUser, location, history }) => {
	const initialState = {
		email: '',
		password: ''
	};

	const { values, handleChange } = useForm(initialState);
	const { email, password } = values;

	const handleSubmit = (e) => {
		e.preventDefault();
		signInUser(values, location, history);
	};
	return (
		<div className={styled.container}>
			<div className={styled.formContainer}>
				<h2>SIGN IN</h2>
				<p>Log in to connect</p>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="">
						<i>
							<FontAwesomeIcon icon="at" />
						</i>
						<input
							type="text"
							name="email"
							placeholder="Email"
							value={email}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="lock" />
						</i>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
					</div>

					<button className={styled.btn}>SIGN IN</button>

					<span className={styled.forgottenPassword}>forgotten password ?</span>
				</form>
			</div>
		</div>
	);
};

Signin.propTypes = {
	signInUser: PropTypes.func.isRequired
};
// const mapStateToProps = (state) => ({
// 	auth: state.auth
// });
export default connect(null, { signInUser })(withRouter(Signin));
