import React, { Component } from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import PostList from './containers/post-list';
import PostForm from './containers/post-form';
import Post from './containers/post';
import NotFound from './components/not-found';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={PostList}/>
                    <Route path="create-post" component={PostForm}/>
                    <Route path="posts/:id" component={Post}/>
                    <Route path="*" component={NotFound}/>
                </Router>
            </div>
        )
    }
}
