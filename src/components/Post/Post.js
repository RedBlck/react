import React from 'react';

const Post = ({userId, title, body}) => {
    return (
        <div className={'post'}>
            <p><b>userID</b>:{userId} - Title:{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default Post;