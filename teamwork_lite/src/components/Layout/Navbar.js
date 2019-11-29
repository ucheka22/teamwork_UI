import React from 'react';
import styled from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
	return (
		<header className={styled.header}>
			<div className={styled.log}>
				<Link to="/home">
					<span className={styled.brandTeam}>Team</span>
					<span className={styled.brandColor}>work</span>
					<span className={styled.brandDot}>.</span>
				</Link>
			</div>
			<ul className={styled.nav}>
				<li className={styled.dropdown}>
					<button className={styled.dropBtn}>
						{' '}
						Post <FontAwesomeIcon className={styled.icon} icon="caret-down" />
					</button>
					<div className={styled.dropdownContent}>
						<Link to="/article">Article</Link>
						<Link to="/gif">Gif</Link>
					</div>
				</li>

				<li>
					<Link to={`/dashboard/${1}`}>Profile</Link>
				</li>
				<li>
					<Link to="/auth/signout">Sign Out</Link>
				</li>
			</ul>
		</header>
	);
}
