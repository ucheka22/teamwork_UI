import React, { Component } from 'react';
import Reactions from './../feeds/Reactions';
import { Link } from 'react-router-dom';
import PostComment from '../pieces/PostComment';
import Comment from '../pieces/Comment';
import User from '../../img/user.png';
import MrBean from '../../img/MrBean.gif';
import styled from './Gif.module.css';
import GifList from '../feeds/GifList';
export default function Gif() {
	return (
		<div>
			<div className={styled.container}>
				<div className={styled.gifBody}>
					<div className={styled.gif}>
						<h3>The Title of The Article Goes Here</h3>
						<div className={styled.info}>
							<Link to={`/profile/1`}>
								<img src={User} />
							</Link>
							<span> John Doe </span> <small> 8 hrs ago</small>{' '}
							<small>
								{' '}
								Tag: <span className={styled.tag}>Politics</span>
							</small>
						</div>
						<p>
							<img src={MrBean} />
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
