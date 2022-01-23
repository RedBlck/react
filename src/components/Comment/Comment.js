import React from 'react';

const Comment = ({name, email, body}) => {
    return (
        <div className={'comment'}>
            <p>name:{name} - email:{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;