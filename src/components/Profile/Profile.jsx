import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div >
       <div>
         <img className={classes.banner} src='http://blogtravel.by/wp-content/uploads/2021/11/dostoprimechatelnosti-venezii-34.jpg'/>
       </div>
          <div>
          <div>desription</div>
          </div>
          <MyPosts />
     </div>
  )
}
export default Profile;