import React from 'react';
import { Link } from 'react-router-dom';
import styled from './Dashboard.module.css';
import User from '../../img/user.png';
import MrBean from '../../img/MrBean.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faPlusCircle,
	faImage,
	faEdit,
	faTrash,
	faTrashAlt,
	faCalendar
} from '@fortawesome/free-solid-svg-icons';
import Reactions from '../feeds/Reactions';
export default function Dashboard() {
	return (
		<div className={styled.container}>
			<div className={styled.bg}>.</div>
			<div className={styled.profile}>
				<div className={styled.heading}>
					<div>
						<h2>Dashboard</h2>
						<br />
						<span> Welcome John Doe</span>
					</div>
					<Link to={`/profile/1`}>
						<img src={User} />
					</Link>
				</div>
				<div className={styled.actions}>
					<span>
						<Link to={`/profile/edit/4`}>
							<FontAwesomeIcon icon={faUser} /> Edit Profile
						</Link>
					</span>
					<span>
						<FontAwesomeIcon icon={faImage} /> Photo
					</span>
					<span className={styled.dropdown}>
						<button className={styled.dropBtn}>
							Post <FontAwesomeIcon className={styled.icon} icon="caret-down" />
						</button>
						<div className={styled.dropdownContent}>
							<Link to="/article">Article</Link>
							<Link to="/gif/post">Gif</Link>
						</div>
					</span>
				</div>
				<div className={styled.posts}>
					<h3>86 Posts</h3>
					<ul>
						{[ 1, 2, 3, 4 ].map((post, index) => {
							if (index % 2 !== 0) {
								return (
									<li key={index}>
										<div className={styled.article}>
											<h4>
												<Link to={`/articles/${index}`}>The Title of the Post</Link>
											</h4>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing exercitationem totam
												cum in exercitationem totam cum in autem repellendus neque a qui vero...
											</p>
											<Reactions className={styled.reaction} />
										</div>
										<div className={styled.buttons}>
											<span>
												<FontAwesomeIcon icon={faCalendar} />
												<small> Jan 23</small>
											</span>
											<div>
												<span>
													<Link to={`/articles/edit/${index}`}>
														<FontAwesomeIcon icon={faEdit} />
													</Link>
												</span>
												<span>
													<FontAwesomeIcon icon={faTrashAlt} />
												</span>
											</div>{' '}
										</div>
									</li>
								);
							}
							{
								return (
									<li key={index}>
										<div className={styled.article}>
											<h4>
												<Link to={`/gifs/${index}`}>The Title of the Post</Link>
											</h4>
											<p>
												<img src={MrBean} />
											</p>
											<Reactions className={styled.reaction} />
										</div>
										<div className={styled.buttons}>
											<span>
												<FontAwesomeIcon icon={faCalendar} />
												<small> Jan 23</small>
											</span>
											<div>
												<span>
													<Link to={`/gifs/edit/${index}`}>
														<FontAwesomeIcon icon={faEdit} />
													</Link>
												</span>
												<span>
													<FontAwesomeIcon icon={faTrashAlt} />
												</span>
											</div>{' '}
										</div>
									</li>
								);
							}
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
