
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
let initialState = {
 friends: [],
 pageSize: 5,
 totalUsersCount: 0,
 currentPage: 1
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
      case SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage:action.currentPage
        };
      case SET_TOTAL_USERS_COUNT:
        return {
          ...state,
          totalUsersCount:action.totalPage
        }
    default :
     return state;
  }
}
export const followAC = (friendId) => ({type: FOLLOW, friendId});
export const unfollowAC = (friendId) => ({type: UNFOLLOW, friendId});
export const setFriendsAC = (friends) => ({type: SET_FRIENDS, friends});
export const setCurrentPageAC = (currentPage) => ({type:SET_CURRENT_PAGE,currentPage});
export const setTotalUsersCountAC = (totalPage) => ({type:SET_TOTAL_USERS_COUNT,totalPage})


export default friendsReducer;