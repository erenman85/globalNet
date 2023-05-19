import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>add posts</button>
        <div>
              New post
        </div>
        <div className={classes.posts}>
            <div className={classes.item}>
            <img className={classes.avatar} src='https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'/>
              post
            1</div>
            <div className={classes.item}>post2</div>
          </div>
    </div>
  )
}
export default MyPosts;
