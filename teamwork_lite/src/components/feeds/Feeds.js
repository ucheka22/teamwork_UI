import React, { useEffect } from 'react';
import store from '../../Logics/store';
import styled from './Feeds.module.css';
import ArticleList from './ArticleList';
import GifList from './GifList';
import { getFeeds } from '../../actions/feedsAction';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';

const Feeds = ({ getFeeds, allPosts, auth }) => {
	useEffect(() => {
		getFeeds();
		// return () => {
		// 	cleanup
		// };
	}, []);

	let { feeds, isloading, error } = allPosts;
	return (
		<div className={styled.container}>
			{isloading ? (
				<Spinner />
			) : (
				<div className={styled.lists}>
					{feeds.map((feed, index) => {
						console.log(feed.gifId);
						if (feed.gifId) {
							return <GifList key={index} gif={feed} user={auth.user} />;
						}
						return <ArticleList id={index} key={index} article={feed} user={auth.user} />;
					})}
				</div>
			)}
		</div>
	);

	// <div className={styled.container}>
	// 	<div className={styled.lists}>
	// 		{[ 1, 2, 3, 4 ].map((feed, index) => {
	// 			if (index % 2 === 0) {
	// 				return <GifList key={index} />;
	// 			}
	// 			return <ArticleList id={index} key={index} />;
	// 		})}
	// 	</div>

	// </div>
};
const mapStateToProps = (state) => ({
	allPosts: state.posts,
	auth: state.auth
});

export default connect(mapStateToProps, { getFeeds })(Feeds);
