import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../helpers/Useform';
import styled from './auth.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Signin() {
	const initialValues = {
		email: '',
		password: ''
	};
	const { values, handleChange, handleSubmit } = useForm(initialValues);
	const { email, password } = values;
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(values);

	// 	// const loginDetails = {
	// 	// 	email,
	// 	// 	password
	// 	// };
	// 	// console.log(loginDetails);
	// 	// 	// createUser(user);
	// 	// 	// history.push('/dashboard/:handle');
	// 	// 	// setName('');
	// 	// 	setEmail('');
	// 	// 	setPassword('');
	// };
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

					<button className={styled.btn}>
						<Link to="/feeds">SIGN IN </Link>
					</button>

					<span className={styled.forgottenPassword}>forgotten password ?</span>
				</form>
			</div>
		</div>
	);
}
