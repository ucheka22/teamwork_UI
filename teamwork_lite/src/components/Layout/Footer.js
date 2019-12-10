import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
	const getStyle = {
		height: '80px',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#333',
		color: 'white'
	};
	return (
		<div style={getStyle}>
			<p> Alright reserve &copy; 2019 Ucheka Chike</p>
		</div>
	);
}

Footer.propTypes = {};

export default Footer;
