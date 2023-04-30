import React from 'react';
import classes from './Profile.module.css';

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
          <div>my post
            <div>
              New post
            </div>
           <div className={classes.posts}>
              <div className={classes.item}>post1</div>
              <div className={classes.item}>post2</div>
            </div>
          </div>
     </div>
  )
}
export default Profile;