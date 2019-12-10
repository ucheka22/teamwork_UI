import React, { useRef, useState } from 'react';
import FileUploader from '../helpers/ImageUpload';
import styled from './PostGif.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EditGif({ typeofFile = 'image' }) {
	const [ image, setFile ] = useState(null);
	// * Focus Input Logics
	const realFile = useRef();
	const [ isSupported, setIsSupported ] = useState(true);
	const focusInput = () => {
		realFile.current.click();
	};
	const getFileName = (e) => {
		const file = e.target.files[0];
		const regExp = /image\/gif/;
		setIsSupported(regExp.test(file.type));
	};
	const showErrorMessage = {
		display: isSupported ? 'none' : 'block',
		color: 'red',
		marginTop: '-2px'
	};
	// * Show Fetch Gifs Logics
	const [ showGifs, setShowGifs ] = useState(false);

	const handleFetchGifs = (e) => {
		e.preventDefault();
		setShowGifs(!showGifs);
	};
	const handleBlur = () => {
		setShowGifs(false);
	};
	const showFetchedGif = {
		display: showGifs ? 'block' : 'none'
	};
	return (
		<div className={styled.container}>
			<div className={styled.formContainer}>
				<h2>Edit Gif</h2>
				<form>
					<input placeholder="Title" className={styled.input} />
					<FileUploader typeofFile="gif" mimeType="Gif" setFile={(file) => setFile(file)} />
					<div className={styled.Or}>
						<span>--OR--</span>
					</div>
					<div className={styled.search}>
						<input onBlur={handleBlur} placeholder="Search our Gif collection" />{' '}
						<button
							onClick={(e) => {
								handleFetchGifs(e);
							}}
						>
							<FontAwesomeIcon icon="search" />
						</button>
					</div>
					<div style={showFetchedGif} className={styled.showGifs} />
					<button className={styled.btn}>EDIT</button>
				</form>
			</div>
		</div>
	);
}
export default EditGif;
