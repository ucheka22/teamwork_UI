import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../img/user.png';
import styled from './Comment.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Comment() {
	return (
		<div className={styled.comment}>
			<Link to={`/profile/1`}>
				<img src={User} />
			</Link>
			<div>
				<div className={styled.commentBody}>
					<span className={styled.name}>John Francis</span>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid veritatis, commodi accusantium
						totam eos impedit. Qui alias reiciendis, ad quibusdam, odit quod asperiores voluptas, voluptatum
						consequatur similique iure nisi quo aut optio recusandae fugit cum ducimus et. Error sint
						accusantium enim vero? Quam, error iste! Neque quibusdam deserunt
					</p>
				</div>
				<div className={styled.reactions}>
					<span>1hr</span>
					<span>
						<FontAwesomeIcon icon="thumbs-up" /> 12
					</span>
					<span>
						<FontAwesomeIcon icon="thumbs-down" /> 8
					</span>
					<span>
						<Link to={`/comments/2/flag`}>
							<FontAwesomeIcon icon="flag" />
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}
