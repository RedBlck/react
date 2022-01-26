import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import './users.css';

const Users = () => {
    const [users,setUsers] = useState([]);
    const [details,setDetails] = useState(null);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, []);
    
    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setDetails(value));
    }
    return (
        <div className={'container'}>
            <div className={'users'}>{users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}</div>
            <div className={'details'}>{details && <UserDetails user={details}/>}</div>
        </div>
    );
};

export default Users;