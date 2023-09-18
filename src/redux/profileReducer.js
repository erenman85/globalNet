

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   posts: [{ id: 1, message: 'Hi,How are you?', likeCount: 45 },
    { id: 2, message: "It's my first post", likeCount: 12 } ],
    newPostText: ""
};


const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id:5,
        message:state.newPostText,
        likeCount:1
      };
        return {
          ...state,
        posts:[...state.posts, newPost ],
        newPostText: ''}
    case  UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state;  
  }
  
  };


  export let addPostActionCreator = () => ({type : ADD_POST});
  export let updateNewPostTextActionCreator = (text) => ({type : UPDATE_NEW_POST_TEXT, newText : text});



  export default profileReducer;