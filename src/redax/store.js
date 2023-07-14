const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
   _state : {
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
  
  },
  getState () {
    return this._state;
  },
   _callSubsriber () {
    console.log('state changed')
  },
  subscribe (observer) {
    this._callSubsriber = observer;
  
  },
   dispatch (action) {
     if (action.type === ADD_POST) {
      let newPost = {
        id:5,
        message:this._state.profilePages.newPostText,
        likeCount:1
      };
      this._state.profilePages.posts.push(newPost);
      this._state.profilePages.newPostText = '';
      this._callSubsriber(this._state);
     }
     else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePages.newPostText = action.newText;
      this._callSubsriber(this._state);
     }
     else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id:5,
        message:this._state.dialogsPages.newMessageText
      };
      this._state.dialogsPages.messages.push(newMessage);
      this._state.dialogsPages.newMessageText = '';
      this._callSubsriber(this._state);
     }
     else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPages.newMessageText = action.text;
      this._callSubsriber(this._state);

     }
   }
};
export let addPostActionCreator = () => ({type : ADD_POST});
export let udateNewPostTextActionCreator = (text) => ({type : UPDATE_NEW_POST_TEXT, newText : text});
export let addMessageActionCreator = () => ({ type : ADD_MESSAGE});
export let updateNewMessageActionCreator = (text) =>({type : UPDATE_NEW_MESSAGE_TEXT, text : text});


window.store = store;

 
 


 



export default store;