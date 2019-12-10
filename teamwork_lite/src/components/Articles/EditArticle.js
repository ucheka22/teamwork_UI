import React, { useState } from 'react';
import ImageUploader from '../helpers/ImageUpload';
import useForm from '../helpers/Useform';
import styled from './PostArticle.module.css';
function EditArticle() {
	const initialState = {
		title: 'The Title of the Article',
		article: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid veritatis, commodi
        accusantium totam eos impedit. Qui alias reiciendis, ad quibusdam, odit quod asperiores
        voluptas, voluptatum consequatur similique iure nisi quo aut optio recusandae fugit cum
        ducimus et. Error sint accusantium enim vero? Quam, error iste! Neque quibusdam deserunt
        vel dolore quae, maxime adipisci accusantium pariatur sint porro quo quis aperiam non
        incidunt ea! Nemo, natu
        aut optio recusandae fugit cum ducimus et. Error sint accusantium enim vero? Quam, error`
	};
	const [ image, setFile ] = useState(null);
	const { values, handleChange } = useForm(initialState);
	return (
		<div className={styled.container}>
			<div className={styled.formbody}>
				<h2>Edit Article</h2>
				<form>
					<input
						type="text"
						name="title"
						placeholder="Title"
						onChange={(e) => handleChange(e)}
						value={values.title}
					/>
					<ImageUploader
						typeofFile={'jpeg' || 'jpg' || 'png'}
						mimeType="Image"
						setFile={(file) => setFile(file)}
					/>
					<textarea
						placeholder="Write article..."
						name="article"
						onChange={(e) => handleChange(e)}
						value={values.article}
					/>
					<button className={styled.btn}>EDIT</button>
				</form>
			</div>
		</div>
	);
}

export default EditArticle;
