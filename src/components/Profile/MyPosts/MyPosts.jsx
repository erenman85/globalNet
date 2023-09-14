import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  let postsElement = props.posts
    .map(p => <Post message={p.message} likeCount={p.likeCount} />);

     let addPost = () => {
      props.addPost();
     };
    let onPostChange = (e) => {
       let text = e.target.value;
       props.updateNewPostText(text);
    }
  return (
    <div className={classes.post_block}>
      <h3>My post</h3>
      <div>
        <textarea onChange={onPostChange} placeholder='Enter your post' value= {props.newPostText}/>
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
