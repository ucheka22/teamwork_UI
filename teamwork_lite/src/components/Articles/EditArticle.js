import React from 'react';
import ImageUploader from '../helpers/ImageUpload';
import styled from './PostArticle.module.css';
function EditArticle() {
	const article = {
		title: 'The Title of the Article',
		article: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid veritatis, commodi
        accusantium totam eos impedit. Qui alias reiciendis, ad quibusdam, odit quod asperiores
        voluptas, voluptatum consequatur similique iure nisi quo aut optio recusandae fugit cum
        ducimus et. Error sint accusantium enim vero? Quam, error iste! Neque quibusdam deserunt
        vel dolore quae, maxime adipisci accusantium pariatur sint porro quo quis aperiam non
        incidunt ea! Nemo, natu
        aut optio recusandae fugit cum ducimus et. Error sint accusantium enim vero? Quam, error`
	};
	return (
		<div className={styled.container}>
			<div className={styled.formbody}>
				<h2>Edit Article</h2>
				<form>
					<input type="text" placeholder="Title" value={article.title} />
					<ImageUploader />
					<textarea placeholder="Write article..." value={article.article} />
					<button className={styled.btn}>Post</button>
				</form>
			</div>
		</div>
	);
}

export default EditArticle;
