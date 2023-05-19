import React from 'react';
import classes from './Post.module.css';

const Post = () => {
  return (
     <div className={classes.item}>
        <img className={classes.avatar} src='https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'/>
         post1
         <div>
         <span>like</span>
         </div>
     </div>
  )
}
export default Post;
