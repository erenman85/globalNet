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
      messages: [
        {id:1, message : 'Hello'},
        {id:2, message : 'What`s up??'},
        {id:3, message : 'Caramba!!!'},
        {id:4, message : 'YO!'}
      ],
      newMessageText: "new message.."
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

export let addMessage = () =>{
  let newMessage = {
    id:5,
    message:state.dialogsPages.newMessageText
  };
  state.dialogsPages.messages.push(newMessage);
  state.dialogsPages.newMessageText = '';
  rerenderEntireTree(state);
}

export let updateNewMessageText = (text) => {
  state.dialogsPages.newMessageText = text;
  rerenderEntireTree(state);
}



export default state;