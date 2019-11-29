import React from 'react';
import { Link } from 'react-router-dom';
import styled from './/PostComment.module.css';
import User from '../../img/user.png';

export default function PostComment() {
	return (
		<form className={styled.postcomment}>
			<Link to={`/profile/1`}>
				<img src={User} />
			</Link>
			<textarea placeholder="Leave a comment ..." />
			<button className={styled.btn}>Post</button>
		</form>
	);
}
