import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from './Reactions.module.css';
export default function Reactions() {
	return (
		<div className={styled.Reactions}>
			<span>
				<FontAwesomeIcon icon="thumbs-up" /> 44
			</span>
			<span>
				<FontAwesomeIcon icon="thumbs-down" /> 10
			</span>
			<span>
				<Link to={`/comments/2/flag`}>
					<FontAwesomeIcon icon="flag" />
				</Link>
			</span>
			<span>
				<FontAwesomeIcon icon="comment-alt" /> 23
			</span>
		</div>
	);
}
