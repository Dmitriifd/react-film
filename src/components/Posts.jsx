import React from 'react';
import Post from './Post';

const Posts = (props) => {
    return (
			<div>
				{props.posts.map((post) => (
					<Post key={post.id} name={post.name} cb={props.cb} />
				))}
			</div>
		)
};

export default Posts;