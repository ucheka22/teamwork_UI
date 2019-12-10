import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postArticle } from '../../actions/articleAction';
import useForm from '../helpers/Useform';
import ImageUploader from '../helpers/ImageUpload';
import styled from './PostArticle.module.css';
const PostArticle = ({ postArticle, history }) => {
	const initialState = {
		title: '',
		article: ''
	};
	const { values, handleChange } = useForm(initialState);
	const { title, article } = values;
	const [ image, setFile ] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		postArticle(Object.assign(values, { image: image }), history);
	};

	return (
		<div className={styled.container}>
			<div className={styled.formbody}>
				<h2>Post Article</h2>
				<form
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={title}
						onChange={(e) => {
							handleChange(e);
						}}
					/>
					<ImageUploader
						typeofFile={'jpeg' || 'jpg' || 'png'}
						mimeType="Image"
						setFile={(file) => setFile(file)}
					/>
					<textarea
						name="article"
						placeholder="Write article..."
						value={article}
						onChange={(e) => {
							handleChange(e);
						}}
					/>
					<button className={styled.btn}>Post</button>
				</form>
			</div>
		</div>
	);
};

export default connect(null, { postArticle })(withRouter(PostArticle));
