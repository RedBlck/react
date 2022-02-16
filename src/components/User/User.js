import React from 'react';
import {Link, Outlet} from "react-router-dom";



const User = ({user:{id, name}}) => {
    return (
        <div>
            <div>{id}). {name}</div>
            <Link to={id.toString()}><button>UserDetail</button></Link>
            <Link to={`${id.toString()}/albums`}><button>Albums</button></Link>
        </div>

    );
};

export default User;