import React from 'react';
import styled from './auth.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CreateUser() {
	return (
		<div className={styled.container}>
			<div className={styled.formContainer}>
				<h2>CREATE USER ACCOUNT</h2>
				<p>Fill in form to create employee account.</p>
				<form>
					<div className="">
						<i>
							<FontAwesomeIcon icon="user" />
						</i>
						<input type="text" placeholder="Full Name" />
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="at" />
						</i>
						<input type="text" placeholder="Email" />
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="lock" />
						</i>
						<input type="password" placeholder="Password" />
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="lock" />
						</i>
						<input type="password" placeholder="Confirm Password" />
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="male" />
						</i>
						<input type="text" placeholder="Gender" />
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="hard-hat" />
						</i>
						<input type="text" placeholder="Job Role" />
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="building" />
						</i>
						<input type="text" placeholder="Department" />
					</div>
					<div className="">
						<i>
							<FontAwesomeIcon icon="address-book" />
						</i>
						<input type="text" placeholder="Address" />
					</div>
					<div>
						<button className={styled.btn}>Create User</button>
					</div>
				</form>
			</div>
		</div>
	);
}
