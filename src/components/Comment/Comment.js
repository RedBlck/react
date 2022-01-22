import React from 'react';

const Comment = ({id, name, email, body}) => {
    return (
        <div className={'comment'}>
            <p>ID:{id} - name:{name} - email:{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;