import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, udateNewPostTextActionCreator } from '../../../redax/store';



const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let postsElement = props.posts
    .map(p => <Post message={p.message} likeCount={p.likeCount} />);
    let addPost = () => {
      props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
      let text = newPostElement.current.value;
      let action = udateNewPostTextActionCreator(text);
      props.dispatch(action);
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
