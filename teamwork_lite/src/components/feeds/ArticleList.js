import React from 'react';
import { Link } from 'react-router-dom';
import styled from './ArticleList.module.css';
import User from '../../img/user.png';
import Reactions from './Reactions';

export default function ArticleList({ id, article, user }) {
	return (
		<div className={styled.articleList}>
			<div className={styled.articleBody}>
				<h3>
					<Link to={`/articles/${article.articleId}`}> {article.title} </Link>
				</h3>
				<div className={styled.info}>
					<Link to={`/profile/${user.userId}`}>
						<img src={User} />
					</Link>
					<span> {`${user.lastName} ${user.firstName}`} </span> <small> 8 hrs ago</small>
				</div>
				<p>
					{' '}
					{article.article}...
					<span className={styled.readmore}>
						<Link to={`/articles/${id}`}>Read More</Link>
					</span>
				</p>
				<Reactions />
			</div>
		</div>
	);
}
