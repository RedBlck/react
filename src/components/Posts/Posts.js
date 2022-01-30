import React from 'react';

import './Posts.css';

const Posts = ({id, title, body}) => {
    return (
        <div className={'post'}>
            <div><b>{id}</b> - {title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Posts;