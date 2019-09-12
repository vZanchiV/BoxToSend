import axios from 'axios';
import {AT_POST} from './action-types';

const END_POINT="http://localhost:3000";

export function readAllPost() {
    return function (dispatch) {
        axios.get(`${END_POINT}/posts`).then(res => {
            dispatch({type:AT_POST.READ_ALL_POST,payload:res.data})
        })
    }
}

export function readPost(id) {
    return function (dispatch) {
        axios.get(`${END_POINT}/posts/${id}`).then(res => {
            dispatch({type:AT_POST.READ_POST,payload:res.data})
        })
    }
}

export function deletedPost(id) {
    return function (dispatch) {
        axios.delete(`${END_POINT}/posts/${id}`).then(res => {
            dispatch({type:AT_POST.DELETE,payload:id})
        })
    }
}

export function createPost(post) {
    return function (dispatch) {
        axios.post(`${END_POINT}/posts`, {
            title:post.title,
            content:post.content,
            author:post.author

        }).then(res => {
            dispatch({type:AT_POST.CREATE,payload:res.data})
        })
    }
}