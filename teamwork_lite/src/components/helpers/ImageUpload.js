import React, { useRef, useState } from 'react';
import styled from './ImageUpload.module.css';

// Hide the input field
// reference the input field and the span
// When a the button is clicked,there should be an onclick handler, transfer focus to input field
// When an image is selected , select the file name of the and display it in the span field
export default function ImageUpload({ typeofFile = 'image' }) {
	const realFile = useRef();
	const [ fileDetail, setFileDetail ] = useState(`Upload an ${typeofFile}`);
	const [ isSupported, setIsSupported ] = useState(true);
	const focusInput = () => {
		realFile.current.click();
	};
	const getFileName = (e) => {
		const file = e.target.files[0];
		const regExp = /image\/(jpeg|jpg|png)/;
		setIsSupported(regExp.test(file.type));
		setFileDetail(file.name);
	};
	const showErrorMessage = {
		display: isSupported ? 'none' : 'block',
		color: 'red',
		marginTop: '-2px'
	};
	return (
		<div className={styled.fileContainer}>
			<div className={styled.file}>
				<input
					ref={realFile}
					type="file"
					name="image"
					onChange={(e) => getFileName(e)}
					className={styled.realInput}
				/>
				<button className={styled.btn} onClick={focusInput}>
					Browse
				</button>
				<span className={styled.fileInfo}> {fileDetail}</span>
			</div>
			<small style={showErrorMessage}>Files type should be JPEG,JPG or PNG</small>
		</div>
	);
}
