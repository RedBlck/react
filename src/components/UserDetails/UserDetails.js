import React from 'react';

const UserDetails = ({user:{id, name, email}}) => {
    return (
        <div>
            {id}-{name}-{email}

        </div>
    );
};

export default UserDetails;