import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
   if (!props.profile) {
     return < Preloader />
   }
  return (
    <div >
       <div>
         <img className={classes.banner} src='http://blogtravel.by/wp-content/uploads/2021/11/dostoprimechatelnosti-venezii-34.jpg'/>
       </div>
          <div className={classes.descriptoin_block}>
            <img src={props.profile.photos.large}/>
          <div>desription</div>
          </div>

     </div>
  )
}
export default ProfileInfo;