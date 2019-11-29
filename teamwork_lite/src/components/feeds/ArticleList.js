import React from 'react';
import { Link } from 'react-router-dom';
import styled from './ArticleList.module.css';
import User from '../../img/user.png';
import Reactions from './Reactions';

export default function ArticleList({ id }) {
	return (
		<div className={styled.articleList}>
			{/* <div>
				
			</div> */}

			<div className={styled.articleBody}>
				<h3>
					<Link to={`/articles/${id}`}>The Title of The Article Goes Here</Link>
				</h3>
				<div className={styled.info}>
					<Link to={`/profile/1`}>
						<img src={User} />
					</Link>
					<span> John Doe </span> <small> 8 hrs ago</small>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing exercitationem totam cum in elit. Dolore, sint
					excepturi veritatis odio blanditiis officiis odit id ipsum, exercitationem totam cum in autem
					repellendus neque a qui vero...
					<span className={styled.readmore}>
						<Link to={`/articles/${id}`}>Read More</Link>
					</span>
				</p>
				<Reactions />
			</div>
		</div>
	);
}
