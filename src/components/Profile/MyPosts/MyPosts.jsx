import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostText } from '../../../redax/state';

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let postsElement = props.posts
    .map(p => <Post message={p.message} likeCount={p.likeCount} />);
    let addPost = () => {
      props.addPost();
      updateNewPostText('');
    };
    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }
  return (
    <div className={classes.post_block}>
      <h3>My post</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement}
         value= {props.newPostText}/>
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
