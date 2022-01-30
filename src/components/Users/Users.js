import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import {postService} from "../../services/post.service";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import Posts from "../Posts/Posts";
import './users.css';

const Users = () => {
    const [users,setUsers] = useState([]);
    const [details,setDetails] = useState(null);
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, []);
    
    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setDetails(value));
    }
    const getPostId = (id) => {
      postService.getById(id)
          .then(value => setPosts(value))
    }
    return (
        <div>
            <div className={'container'}>
                <div className={'users'}>{users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}</div>
                <div className={'details'}>{details && <UserDetails user={details} getPostId={getPostId}/>}</div>
            </div>
            <div>
                <div className={'posts'}>{posts && posts.map(value => <Posts key={value.id} title={value.title} id={value.id} body={value.body}/>)}</div>
            </div>
        </div>
    );
};

export default Users;