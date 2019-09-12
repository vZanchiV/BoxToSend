import React, { Component } from 'react'
import {Link} from 'react-router';
const PostListItem  = (props) => {   
    const {post} = props
        return (
            <tr>
                <td><Link to={`/posts/${post.id}`}>{post.title}</Link></td>
                <td><button onClick={() => deletePost(post)} className="btn btn-danger">Supprimer</button></td>
            </tr>
        )

        function deletePost(post) {
            props.deletePostCallBack(post)
        }
}

export default PostListItem;
