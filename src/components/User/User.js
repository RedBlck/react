import React from 'react';

const User = ({name, username, phone}) => {
    return (
        <div className={'user'}>
            <p>{name} - {username}</p>
            <p>Phone:{phone}</p>
        </div>
    );
};

export default User;