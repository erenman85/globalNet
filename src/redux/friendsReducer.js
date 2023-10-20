
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';


let initialState = {
 friends: []
}

const friendsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
      friends: state.friends.map( (u) => {
        if (u.id === action.friendId) {
           return { ...u, followed: true}
        }
        return u;
      })
    };
    case UNFOLLOW:
      return {
        ...state,
        friends: state.friends.map( (u) => {
          if (u.id === action.friendId) {
             return { ...u, followed: false}
          }
          return u;
        })
      };
      case SET_FRIENDS:
        return {...state, 
          friends:[ ...action.friends]};

    default :
     return state;
  }
}
export const followAC = (friendId) => ({type: FOLLOW, friendId});
export const unfollowAC = (friendId) => ({type: UNFOLLOW, friendId});
export const setFriendsAC = (friends) => ({type: SET_FRIENDS, friends})


export default friendsReducer;