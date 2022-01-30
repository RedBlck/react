import React from 'react';

const User = ({user: {id, name}, getUserId}) => {
    return (
        <div>
            <b>{id}</b> - {name}
            <button onClick={()=>getUserId(id)}>GetDetails</button>
        </div>
    );
};

export default User;