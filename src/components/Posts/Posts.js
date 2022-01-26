import React, {useState} from 'react';
import {postService} from "../../services/post.service";
import Post from "../Post/Post";

const Posts = () => {
    const [posts,setPosts] = useState([]);
    const getPostId = (id) => {
        postService.getById(id)
            .then(value => setPosts(value));
    }

    return (
        <div>

        </div>
    );
};

export default Posts;