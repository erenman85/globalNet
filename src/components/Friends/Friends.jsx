import React from 'react';
import classes from './Friends.module.css';
import userPhoto from '../../assets/images/userM.jpg';
import { NavLink } from 'react-router-dom';


const Friends = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for(let i = 1; i <= pagesCount; i++) {
       pages.push(i);
   }
   let curP = props.currentPage;
   let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
   let curPL = curP + 5;
   let slicedPages = pages.slice( curPF, curPL);
 
   return <div>
     <div className={classes.pageNumber}>{slicedPages.map(p => {
       return <span className={props.currentPage === p && classes.selectPage}
       onClick={(e) => {props.onPageChanged(p)}}>
         {p}
        </span>
     })}
     </div>
    {
      props.friends.map( u => <div key={u.id}>
          <div>
            <div>
              <NavLink to = {'/profile/'+ u.id}>
              <img className={classes.avatar} src= {u.photos.small != null ? u.photos.small : userPhoto}/>
              </NavLink>
            </div>
            <div>
              {u.followed
              ?<button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
              : <button onClick={() => {props.follow(u.id)}}>follow</button>}
            </div>
          </div>
          <div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{'u.location.city'}</div>
              <div>{'u.location.country'}</div>
            </div>
          </div>
        </div>
      )
    }
   </div>
  
}

export default Friends;