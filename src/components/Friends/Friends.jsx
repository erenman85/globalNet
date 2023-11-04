import React from "react";
import classes from "./Friends.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/userM.jpg"




const Friends = (props) => {
 
   return <div>
     <div className={classes.pageNumber}>{slicedPages.map(p => {
       return <span className={this.props.currentPage === p && classes.selectPage}
       onClick={(e) => {this.onPageChanged(p)}}>
         {p}
        </span>
     })}
     </div>
    {
      props.friends.map( u => <div key={u.id}>
          <div>
            <div>
              <img className={classes.avatar} src= {u.photos.small != null ? u.photos.small : userPhoto}/>
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