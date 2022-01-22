import React from 'react';

const Post = ({userId, id, title, body}) => {
    return (
        <div className={'post'}>
            <p><b>userID</b>:{userId} - ID:{id} - Title:{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default Post;