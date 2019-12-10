import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../../Logics/store';
import PropTypes from 'prop-types';
import styled from './Nav.module.css';
import UserImage from '../../img/user.png';
import { signOut } from '../../actions/authAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
const NewLanding = ({ match, history, auth, signOut }) => {
	const handleClick = (e) => {
		e.preventDefault();
		signOut(history);
	};

	return (
		<Fragment>
			{auth.isAuthenticated ? (
				<div className={styled.nav}>
					<div className={styled.branding}>
						<span>
							<Link to="/">Teamwork.</Link>
						</span>
					</div>
					<ul className={styled.navlinks}>
						<li>
							<Link to="/feeds">
								<FontAwesomeIcon icon={faHome} /> Home
							</Link>
						</li>
						<li className={styled.dropdown}>
							<span className={styled.dropdownBtn}>
								Post <FontAwesomeIcon icon={faCaretDown} />
							</span>
							<div className={styled.dropdownContent}>
								<Link to="/article">Article</Link>
								<Link to="/gif">Gif</Link>
							</div>
						</li>
						<li className={styled.dropdown}>
							<span className={styled.dropdownBtn}>
								<img src={UserImage} className={styled.item} />
								<small className={styled.item}>{auth.user.firstName}</small>
								<FontAwesomeIcon icon={faCaretDown} className={styled.item} />
							</span>
							<div className={styled.dropdownContent}>
								<Link to={`/dashboard/${auth.user.userId}`}> Dashboard</Link>
								<Link
									to="#"
									onClick={(e) => {
										handleClick(e);
									}}
								>
									{' '}
									Sign Out
								</Link>
							</div>
						</li>
					</ul>
				</div>
			) : (
				<div className={styled.secondNav}>
					<div className={styled.logo}>
						<span>
							<Link to="/"> Teamwork. </Link>
						</span>
					</div>
					<span className={styled.navbtn}>
						{' '}
						<Link to="/auth/signin"> SIGN IN </Link>{' '}
					</span>
				</div>
			)}
		</Fragment>
	);
};
const mapStateToProps = (state) => ({
	auth: state.auth
});
NewLanding.propTypes = {};

export default connect(mapStateToProps, { signOut })(NewLanding);
