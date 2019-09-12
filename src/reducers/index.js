import { combineReducers } from 'redux';
import  ReducerPosts  from './reducer-post';
import ReducerActivePosts from "./reducer-active-post";
import {reducer as ReducerForm } from 'redux-form';

const rootReducer = combineReducers({
  posts : ReducerPosts, 
  activePost : ReducerActivePosts,
  form: ReducerForm
});


export default rootReducer;
