import React from 'react';

const Post = ({post:{id, title}}) => {
    return (
        <div>
            <div>{id}). {title} <button>PostDetails</button></div>
        </div>
    );
};

export default Post;