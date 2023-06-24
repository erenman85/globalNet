import { rerenderEntireTree } from "../render";


const state = {
  profilePages: {
    posts: [{ id: 1, message: 'Hi,How are you?', likeCount: 45 },
    { id: 2, message: "It's my first post", likeCount: 12 } ],
    newPostText: "new post.."
  },
  dialogsPages: {
    dialogs:  [
      {id : 1, name: 'Erentsen', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
      {id : 2, name: 'Saglara', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
      {id : 3, name: 'Chingis', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
      {id : 4, name: 'Mama', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
      {id : 5, name: 'Papa', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'}
    ],
      messeges: [
        {id:1, messege : 'Hello'},
        {id:2, messege : 'What`s up??'},
        {id:3, messege : 'Caramba!!!'},
        {id:4, messege : 'YO!'}
      ]
  },

  sidebarPages : {
    friends: [
      {id : 1, name: 'Erentsen', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
      {id : 2, name: 'Saglara', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
      {id : 3, name: 'Chingis', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
      {id : 4, name: 'Mama', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
      {id : 5, name: 'Papa', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'}
    ]
  }

}
window.state = state;

export let addPost = () => {
  let newPost = {
    id:5,
    message:state.profilePages.newPostText,
    likeCount:1
  };
  state.profilePages.posts.push(newPost);
  state.profilePages.newPostText = '';
  rerenderEntireTree(state);
};
export let updateNewPostText = (newText) => {
  state.profilePages.newPostText = newText;
  rerenderEntireTree(state);

}



export default state;