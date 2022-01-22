import React from 'react';

const User = ({id, name, username, phone}) => {
    return (
        <div className={'user'}>
            <p>{id} - {name} - {username}</p>
            <p>Phone:{phone}</p>
        </div>
    );
};

export default User;