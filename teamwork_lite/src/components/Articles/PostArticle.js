import React from 'react';
import ImageUploader from '../helpers/ImageUpload';
import styled from './PostArticle.module.css';
function PostArticle() {
	return (
		<div className={styled.container}>
			<div className={styled.formbody}>
				<h2>Create Post</h2>
				<form>
					<input type="text" placeholder="Title" />
					<ImageUploader />
					<textarea placeholder="Write article..." />
					<button className={styled.btn}>Post</button>
				</form>
			</div>
		</div>
	);
}

export default PostArticle;
