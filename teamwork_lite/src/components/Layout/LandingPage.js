import React from 'react';
import { Link } from 'react-router-dom';
import styled from './LandingPage.module.css';
export default function LandingPage() {
	return (
		<div className={styled.showcase}>
			<div className={styled.showcaseContainer}>
				<div className={styled.showcaseContent}>
					<nav>
						<div className={styled.branding}>
							<span>Teamwork.</span>
						</div>
						<div>
							<Link to="/auth/signin">
								<button className={styled.btn}>SIGN IN</button>
							</Link>
						</div>
					</nav>
					<section>
						<div className={styled.sectionContent}>
							<h1>Welcome To Teamwork</h1>
							<p>
								<span> Stay In Tune,Stay Connected and Stay Informed in your Workplace</span>
								<button>
									<Link to="/auth/signin">SIGN IN</Link>{' '}
								</button>
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
