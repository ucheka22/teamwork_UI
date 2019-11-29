import React from 'react';
import styled from './Edit.module.css';
import ImageUpload from '../helpers/ImageUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Edit() {
	return (
		<div className={styled.container}>
			<div className={styled.formbody}>
				<h2>Edit Profile</h2>
				<form>
					<input type="text" placeholder="Email" />
					<input type="text" placeholder="Address" />
					<input type="text" placeholder="Facebook" />
					<input type="text" placeholder="Twitter" />
					<input type="text" placeholder="Instagram" />
					<ImageUpload />
					<textarea placeholder="Tell us a little about yourself..." />
					<button className={styled.btn}>Edit</button>
				</form>
			</div>
		</div>
	);
}

export default Edit;
