import React from 'react';
import classes from './Friends.module.css';
import userPhoto from '../../assets/images/userM.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Friends = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];//1 
   for(let i = 1; i <= pagesCount; i++) {
       pages.push(i);
   }
   let curP = props.currentPage;//1
   let curPF = ((curP - 5) <= 0) ?  0  : curP - 5 ;//0
   let curPL = curP + 5;//6
   let slicedPages = pages.slice( curPF, curPL);//[0,6]= 1
 
   return <div>
     <div className={classes.pageNumber}>{slicedPages.map(p => {
       return <span className={props.currentPage === p && classes.selectPage}
       onClick={(e) => {props.onPageChanged(p)}}>
         {p}
        </span>
     })}
     </div>
    {
      props.friends.map( user => <div key={user.id}>
        
          <div>
            <div>
              <NavLink to = {'/profile/'+ user.id}>
              <img className={classes.avatar} src= {user.photos.small != null ? user.photos.small : userPhoto}/>
              </NavLink>
            </div>
            <div>
              {user.followed 
              ? <button onClick={() => {//запрос-удалить подписку
                 axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                     withCredentials: true,
                     headers: {"API-KEY": "a596a28d-1ab3-4aad-8e6a-ddf1ab18aa09"}
                 })
                   .then(response => {
                      if(response.data.resultCode === 0) {
                        props.unfollow(user.id);
                      }
                   })
               }}>unfollow</button> 
              : <button onClick= {() => {//запрос-пост на подписку
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{}, {
                     withCredentials: true,
                     headers: {"API-KEY": "a596a28d-1ab3-4aad-8e6a-ddf1ab18aa09"}
                })
                   .then(response => { 
                       if(response.data.resultCode === 0) {
                        props.follow(user.id)
                       }
                   })
               }}>follow</button>}
            </div>
          </div>
          <div>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div>
              {/* <div>{'user.location.city'}</div> */}
              {/* <div>{'user.location.country'}</div> */}
            </div>
          </div>
        </div>
      )
    }
   </div>
  
}

export default Friends;