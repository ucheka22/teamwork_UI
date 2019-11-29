import React from 'react';
import styled from './/PostComment.module.css';
import User from '../../img/user.png';

export default function PostComment() {
	return (
		<form className={styled.postcomment}>
			<img src={User} />
			<textarea placeholder="Leave a comment ..." />
			<button className={styled.btn}>Post</button>
		</form>
	);
}
