import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, history } from 'react-router-dom';
import { postGif } from '../../actions/gifAction';
import FileUploader from '../helpers/ImageUpload';
import styled from './PostGif.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostGif = ({ postGif, history }) => {
	// Relevant for Now Starts \\
	// * Focus Input Logics
	const titleField = useRef();
	const [ title, setTitle ] = useState(' ');
	const [ image, setFile ] = useState(null);
	const [ searchText, setSearchText ] = useState('');
	const [ showGifs, setShowGifs ] = useState(false);
	const [ images, setImages ] = useState([]);
	const [ selectedGif, setSeletedGif ] = useState(null);

	const handleTextFieldChange = () => {
		setTitle(titleField.current.value);
	};
	const gif = { title: title, image: image || selectedGif };
	const handleSubmit = (e) => {
		e.preventDefault();
		postGif(gif, history);
	};
	// Relevant for Now Ends \\

	// * Show Fetch Gifs Logics
	const API_KEY = 'qWu5IB8KSFTVsfSQX97uXakYjOCmUV3P';
	const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=8&q=${searchText}`;
	const handleSearchText = (e) => {
		setSearchText(e.target.value.trim());
	};
	const handleFetchGifs = (e) => {
		fetch(gifUrl)
			.then((response) => response.json())
			.then((content) => {
				setImages(content.data);
			})
			.catch((err) => {
				console.log(err);
			});

		e.preventDefault();
		setShowGifs(!showGifs);
	};
	const handleSeletedGif = (gifId) => {
		const url = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}
		`;
		fetch(url)
			.then((response) => response.json())
			.then((content) => {
				setSeletedGif(content.data.images.downsized_medium);
				console.log(content.data.images.downsized_medium);
			})
			.catch((err) => {
				console.log(err);
			});
		setShowGifs(false);
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
				<form
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<input
						placeholder="Title"
						ref={titleField}
						onChange={() => {
							handleTextFieldChange();
						}}
						className={styled.input}
					/>
					<FileUploader typeofFile="gif" mimeType="Gif" setFile={(file) => setFile(file)} />
					<div className={styled.Or}>
						<span>--OR--</span>
					</div>
					<div className={styled.search}>
						<input
							onBlur={handleBlur}
							onChange={(e) => handleSearchText(e)}
							value={searchText}
							placeholder="Search our Gif collection"
						/>{' '}
						<button
							onClick={(e) => {
								handleFetchGifs(e);
							}}
						>
							<FontAwesomeIcon icon="search" />
						</button>
					</div>
					<div style={showFetchedGif} className={styled.showGifs}>
						{images.map((gif) => {
							return (
								<img
									key={gif.id}
									src={gif.images.downsized_medium.url}
									alt="Gif Image"
									width="60px"
									height="50px"
									onClick={() => {
										handleSeletedGif(gif.id);
									}}
									style={{
										border: '1px solid #e0e0e0',
										display: 'inline-block',
										margin: '5px'
									}}
								/>
							);
						})}
					</div>
					<button className={styled.btn}>Post</button>
				</form>
			</div>
		</div>
	);
};

export default connect(null, { postGif })(withRouter(PostGif));
