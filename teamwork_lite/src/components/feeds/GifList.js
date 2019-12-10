import React from 'react';
import { Link } from 'react-router-dom';
import styled from './GifList.module.css';
import User from '../../img/user.png';
import MrBean from '../../img/MrBean.gif';
import Reactions from './Reactions';

export default function GifList({ id, gif, user }) {
	return (
		<div className={styled.gifBody}>
			<h3>
				<Link to={`/gifs/${gif.gifId}`}>{gif.title}</Link>
			</h3>
			<div className={styled.info}>
				<Link to={`/profile/1`}>
					<img src={User} />
				</Link>
				<span>
					{user.lastName} {user.firstName}{' '}
				</span>{' '}
				<small> 8 hrs ago</small>
			</div>
			<p>
				<img src={MrBean} className={styled.gifImage} />
			</p>
			<Reactions />
		</div>
	);
}
