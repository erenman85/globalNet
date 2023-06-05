import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElement = props.posts
    .map(p => <Post message={p.message} likeCount={p.likeCount} />)
  return (
    <div className={classes.post_block}>
      <h3>My post</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>add posts</button>
      </div>

      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>
  )
}
export default MyPosts;
