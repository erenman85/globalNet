import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
   _state : {
    profilePages: {
      posts: [{ id: 1, message: 'Hi,How are you?', likeCount: 45 },
      { id: 2, message: "It's my first post", likeCount: 12 } ],
      newPostText: ""
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
        newMessageText: ""
    },
    sidebarPages: {
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
      this._state.profilePages = profileReducer(this._state.profilePages, action);
      this._state.dialogsPages = dialogsReducer(this._state.dialogsPages, action);
      this._state.sidebarPages = sidebarReducer(this._state.sidebarPages, action);
      this._callSubsriber(this._state);

     }
   
};


window.store = store;

 
 


 



export default store;