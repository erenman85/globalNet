import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div >
       <ProfileInfo />
        <MyPosts posts = {props.profilePages.posts}
        newPostText = {props.profilePages.newPostText}
        addPost= {props.addPost}
        updateNewPostText = {props.updateNewPostText} />
     </div>
  )
}
export default Profile;