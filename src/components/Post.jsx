import React from 'react';

const Post = (props) => {
    const {name, cb} = props

    return (
        <div>
            <h2 onClick={cb}>{name}</h2>
        </div>
    );
};

export default Post;