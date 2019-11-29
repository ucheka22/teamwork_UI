import React from 'react';
import styled from './Feeds.module.css';
import ArticleList from './ArticleList';
import GifList from './GifList';

export default function Feeds() {
	const array = [ 1, 2, 3, 4 ];
	return (
		<div className={styled.container}>
			<div className={styled.lists}>
				{array.map((feed, index) => {
					if (index % 2 === 0) {
						return <GifList key={index} />;
					}
					return <ArticleList id={index} key={index} />;
				})}
			</div>
		</div>
	);
}
