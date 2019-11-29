import React, { Component } from 'react';
import Reactions from './../feeds/Reactions';
import PostComment from '../pieces/PostComment';
import Comment from '../pieces/Comment';
import User from '../../img/user.png';
import styled from './Article.module.css';
export default class Article extends Component {
	render() {
		// Find article with ID articleId in state
		// Display the details of the Article
		return (
			<div>
				<div className={styled.container}>
					<div className={styled.articleBody}>
						<div className={styled.article}>
							<h3>The Title of The Article Goes Here</h3>
							<div className={styled.info}>
								<img src={User} />
								<span> John Doe </span> <small> 8 hrs ago</small>{' '}
								<small>
									{' '}
									Tag: <span className={styled.tag}>Politics</span>
								</small>
							</div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid veritatis, commodi
								accusantium totam eos impedit. Qui alias reiciendis, ad quibusdam, odit quod asperiores
								voluptas, voluptatum consequatur similique iure nisi quo aut optio recusandae fugit cum
								ducimus et. Error sint accusantium enim vero? Quam, error iste! Neque quibusdam deserunt
								vel dolore quae, maxime adipisci accusantium pariatur sint porro quo quis aperiam non
								incidunt ea! Nemo, natus iure ut dolor eius corrupti dolorem accusamus mollitia
								recusandae a dolorum labore laboriosam consectetur exercitationem quisquam repellat ea
								minima expedita et, voluptates quae reiciendis libero rerum tempora. Vitae amet incidunt
								sit at quisquam ullam accusamus iust Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Aliquid veritatis, commodi accusantium totam eos impedit. Qui alias reiciendis, ad
								quibusdam, odit quod asperiores voluptas, voluptatum consequatur similique iure nisi quo
								aut optio recusandae fugit cum ducimus et. Error sint accusantium enim vero? Quam, error
								iste! Neque quibusdam deserunt o aut excepturi porro! Dolorem deleniti qui vitae
								asperiores molestiae aperiam facilis quidem distinctio iste fugit explicabo inventore
								eum eveniet labore suscipit, saepe tempore maiores in nesciunt facere officiis nostrum
								ducimus. Dolorem, officia modi iste earum facere accusamus similique, odio dolore,
								laboriosam eos repellat nam. Placeat inventore deserunt perferendis doloribus!.....
							</p>
						</div>
						<Reactions />
						<PostComment />
						<Comment />
					</div>
				</div>
			</div>
		);
	}
}
