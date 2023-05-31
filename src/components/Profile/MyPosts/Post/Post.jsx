import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
     <div className={classes.item}>
        <img className={classes.avatar} src='https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'/>
         {props.message};
         <div>
         <span>like</span> {props.likeCount};
         </div>
     </div>
  )
}
export default Post;
