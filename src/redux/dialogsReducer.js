


const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};



const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id:5,
        message:state.newMessageText
      };
       return{
          ...state,
           messages: [...state.messages, newMessage],
           newMessageText: '' 
      };
    case  UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      };
    default:
      return state;  
  }
}


export let addMessageActionCreator = () => ({ type : ADD_MESSAGE});
export let updateNewMessageActionCreator = (text) =>({type : UPDATE_NEW_MESSAGE_TEXT, text : text});



export default dialogsReducer;