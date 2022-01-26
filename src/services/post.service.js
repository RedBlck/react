import {urls} from "../configs/urls";


const getById = (id) => {
    return fetch(`${urls.users}/${id}/posts`)
        .then(value => value.json())
};

export const postService = {
    getById
};