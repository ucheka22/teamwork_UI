import React from 'react';
import { Link } from 'react-router-dom';
import styled from './Profile.module.css';
import User from '../../img/user.png';
import Facebook from '../../img/facebook.png';
import Twitter from '../../img/twitter.png';
export default function Profile() {
	return (
		<div className={styled.container}>
			<div className={styled.bg}>.</div>
			<div className={styled.profile}>
				<div className={styled.info}>
					<img src={User} />
					<span>John Doe</span>
					<small> 234 posts Created | 983 Feedbacks</small>
				</div>
				<div className={styled.details}>
					<div>
						<div className={styled.email}>
							<span>Email</span>
							<span>ryanucheka@gmail.com</span>
						</div>
						<div className={styled.socials}>
							<span>
								<Link to="www.facebook.com">
									<img src={Facebook} />
								</Link>
							</span>
							<span>
								<Link to="www.twittercom">
									<img src={Twitter} />
								</Link>
							</span>
						</div>
					</div>
					<div className={styled.bio}>
						<span>Biography</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing exercitationem totam cum in elit.
							Dolore, sint excepturi veritatis odio blanditiis officiis odit id ipsum, exercitationem
							totam cum in autem repellendus neque a qui vero...
						</p>
					</div>
				</div>

				<div className={styled.posts}>
					<h3>Recent Posts</h3>
					<ul>
						{[ 1, 2, 3, 4, 7, 9 ].map((post, index) => {
							return (
								<li key={index}>
									<Link to={`/articles/${index}`}>
										Lorem ipsum dolor sit amet, consectetur adipisicing exercitationem totam cum in
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
