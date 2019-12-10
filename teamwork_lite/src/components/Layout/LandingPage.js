import React from 'react';
import { Link } from 'react-router-dom';
import styled from './LandingPage.module.css';
export default function LandingPage() {
	return (
		<div className={styled.imageBox}>
			<div className={styled.content}>
				<div>
					<h2>
						{' '}
						<span className={styled.span1}>Welcome</span> <span className={styled.span2}>to</span>{' '}
						<span className={styled.span3}>Teamwork</span>
					</h2>
					<p>
						Teamwork helps you connect with your colleguaes, read awesome articles and let your voice be
						hear among your peers
					</p>

					<span className={styled.navbtn}>
						{' '}
						<Link to="/auth/signin"> SIGN IN </Link>{' '}
					</span>
				</div>
			</div>
		</div>
	);
}
