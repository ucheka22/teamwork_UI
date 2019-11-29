import React, { useRef, useState } from 'react';
import styled from './PostGif.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function PostGif({ typeofFile = 'image' }) {
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
				<h2>Post Gif</h2>
				<form>
					<input placeholder="Title" className={styled.input} />
					<div className={styled.file}>
						<input
							ref={realFile}
							type="file"
							name="image"
							onChange={(e) => getFileName(e)}
							className={styled.realInput}
						/>
						<button className={styled.choosebtn} onClick={focusInput}>
							Choose Gif
						</button>
					</div>
					<small style={showErrorMessage}>Files type should be JPEG,JPG or PNG</small>
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
					<button className={styled.btn}>Post</button>
				</form>
			</div>
		</div>
	);
}

export default PostGif;
