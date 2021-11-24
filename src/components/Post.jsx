import React from 'react';

const Post = (props) => {
    const {id, name, removePost } = props;

    return (
			<div>
				<h2>
					{name} <button onClick={() => removePost(id)}>delete</button>
				</h2>
			</div>
		)
};

export default Post;