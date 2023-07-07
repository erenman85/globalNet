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
  addPost () {
    let newPost = {
      id:5,
      message:this._state.profilePages.newPostText,
      likeCount:1
    };
    this._state.profilePages.posts.push(newPost);
    this._state.profilePages.newPostText = '';
    this._callSubsriber(this._state);
  },
  updateNewPostText (newText) {
    this._state.profilePages.newPostText = newText;
    this._callSubsriber(this._state);
  
  },
  addMessage () {
    let newMessage = {
      id:5,
      message:this._state.dialogsPages.newMessageText
    };
    this._state.dialogsPages.messages.push(newMessage);
    this._state.dialogsPages.newMessageText = '';
    this._callSubsriber(this._state);
  },
  updateNewMessageText (text) {
    this._state.dialogsPages.newMessageText = text;
    this._callSubsriber(this._state);
  },
   dispatch (action) {

   }

  

};




window.store = store;

 
 


 



export default store;