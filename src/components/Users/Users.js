import React, {useEffect, useState} from 'react';
import User from "../User/User";
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));
    }, []);
    return (
        <div className={'users'}>
            {users.map(value => <User key={value.id} name={value.name} username={value.username} phone={value.phone}/>)}
        </div>
    );
};

export default Users;