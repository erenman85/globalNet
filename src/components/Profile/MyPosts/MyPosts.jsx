import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let postsElement = props.posts
    .map(p => <Post message={p.message} likeCount={p.likeCount} />);
    let addPost = () => {
      let text = newPostElement.current.value;
      alert(text);
    };
  return (
    <div className={classes.post_block}>
      <h3>My post</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>add posts</button>
      </div>

      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>
  )
}
export default MyPosts;
