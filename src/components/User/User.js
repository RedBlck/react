import React from 'react';

const User = ({user:{id, name}}) => {
    return (
        <div>
            <div>{id}). {name} <button>UserDetail</button> <button>Albums</button></div>
        </div>
    );
};

export default User;