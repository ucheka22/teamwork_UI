import React from 'react';
import spinner from '../../img/loading/loading12.gif';
function Spinner() {
	return (
		<div>
			<img src={spinner} style={{ width: '200px', margin: '40vh auto', display: 'block' }} />
		</div>
	);
}

export default Spinner;
