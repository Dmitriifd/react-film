import React from 'react';
import Post from './Post';

const Posts = (props) => {
    return (
			<div>
				{props.posts.map((post) => (
					<Post key={post.id} id={post.id} name={post.name} removePost={props.removePost} />
				))}
			</div>
		)
};

export default Posts;