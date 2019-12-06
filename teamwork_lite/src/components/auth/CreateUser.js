import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from './auth.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useForm from '../helpers/Useform';
import { createUser } from '../../actions/authAction';

const CreateUser = ({ createUser }) => {
	const initialState = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		password2: '',
		gender: '',
		jobRole: '',
		department: '',
		address: ''
	};
	const { values, handleChange } = useForm(initialState);
	const { firstName, lastName, email, password, password2, gender, jobRole, department, address } = values;

	const handleSubmit = (e) => {
		e.preventDefault();
		createUser(values);
	};

	return (
		<div className={styled.container}>
			<div className={styled.formContainer}>
				<h2>CREATE USER ACCOUNT</h2>
				<p>Fill in form to create employee account.</p>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="">
						<i>
							<FontAwesomeIcon icon="user" />
						</i>
						<input
							type="text"
							name="firstName"
							placeholder="First Name"
							value={firstName}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="user" />
						</i>
						<input
							type="text"
							name="lastName"
							placeholder="Last Name"
							value={lastName}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
					</div>

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
					<div className="">
						<i>
							<FontAwesomeIcon icon="lock" />
						</i>
						<input
							type="password"
							name="password2"
							placeholder="Confirm Password"
							value={password2}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="male" />
						</i>
						<input
							type="text"
							name="gender"
							placeholder="Gender"
							value={gender}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="hard-hat" />
						</i>
						<input
							type="text"
							name="jobRole"
							placeholder="Job Role"
							value={jobRole}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="building" />
						</i>
						<input
							type="text"
							name="department"
							placeholder="Department"
							value={department}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="address-book" />
						</i>
						<input
							type="text"
							name="address"
							placeholder="Address"
							value={address}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
					</div>

					<button className={styled.btn}>Create User</button>
				</form>
			</div>
		</div>
	);
};
CreateUser.propTypes = {
	createUser: PropTypes.func.isRequired
};
export default connect(null, { createUser })(CreateUser);
