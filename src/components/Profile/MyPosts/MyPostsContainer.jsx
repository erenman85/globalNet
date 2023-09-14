import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePages.posts,
    newPostText: state.profilePages.newPostText

  }
};
const mapDispathToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }

  }
};
const MyPostsContainer = connect(mapStateToProps, mapDispathToProps) (MyPosts);


export default MyPostsContainer;
