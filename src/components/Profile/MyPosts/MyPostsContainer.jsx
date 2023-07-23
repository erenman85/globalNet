import React from 'react';
import { addPostActionCreator, udateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
  let state = props.store.getState();
     let addPost = () => {
      props.store.dispatch(addPostActionCreator());
     };
    let onPostChange = (text) => {
        let action = udateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
  return (
    <MyPosts udateNewPostText = {onPostChange} addPost = {addPost}
        posts = {state.profilePages.posts}
        newPostText = {state.profilePages.newPostText}/>
  )
  
}
export default MyPostsContainer;
