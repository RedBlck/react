import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]));
    }, []);
    return (
        <div>
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsPage;