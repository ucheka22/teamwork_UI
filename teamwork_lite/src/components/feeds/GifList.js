import React from 'react';
import { Link } from 'react-router-dom';
import styled from './GifList.module.css';
import User from '../../img/user.png';
import MrBean from '../../img/MrBean.gif';
import Reactions from './Reactions';

export default function GifList({ id }) {
	return (
		<div className={styled.gifBody}>
			<h3>
				<Link to={`/gifs/${id}`}>The Title of The Gif Goes Here</Link>
			</h3>
			<div className={styled.info}>
				<img src={User} />
				<span> John Doe </span> <small> 8 hrs ago</small>
			</div>
			<p>
				<img src={MrBean} className={styled.gifImage} />
			</p>
			<Reactions />
		</div>
	);
}
