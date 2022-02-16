import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services/user.service";

const UserDetailPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        userService.getById(id).then(value => setUser({...value}));
    }, []);
    return (
        <div>
            {user && (
                <div>
                    <div>Id: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>Username: {user.username}</div>
                    <div>Email: {user.email}</div>
                </div>

            )}
        </div>
    );
};

export default UserDetailPage;