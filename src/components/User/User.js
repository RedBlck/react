import React from 'react';

const User = ({user: {id, name, email}, getUserId}) => {
    return (
        <div>
            {name}{email}
            <button onClick={()=>getUserId(id)}>details</button>
        </div>
    );
};

export default User;