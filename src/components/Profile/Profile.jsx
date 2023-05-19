import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={classes.content}>
       <div>
         <img className={classes.banner} src='http://blogtravel.by/wp-content/uploads/2021/11/dostoprimechatelnosti-venezii-34.jpg'/>
       </div>
          <div>
          <img className={classes.avatar} src='https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'/>
          <div>desription</div>
          </div>
          <MyPosts />
     </div>
  )
}
export default Profile;