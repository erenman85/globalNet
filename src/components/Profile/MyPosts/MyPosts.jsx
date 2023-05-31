import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>add posts</button>
        <div>
              New post
        </div>
        <div className={classes.posts}>
          <Post message = 'Hi,How are you?' likeCount = '38' />
          <Post message = "It's my first post" likeCount = '29' />
        </div>
    </div>
  )
}
export default MyPosts;
