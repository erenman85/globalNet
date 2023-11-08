
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let initialState = {
 friends: [],
 pageSize: 5,
 totalUsersCount: 0,
 currentPage: 1,
 isFetching:true
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
        };
       case TOGGLE_IS_FETCHING:
         return {
           ...state,
           isFetching: action.isFetching
         }
    default :
     return state;
  }
}
export const follow = (friendId) => ({type: FOLLOW, friendId});
export const unfollow = (friendId) => ({type: UNFOLLOW, friendId});
export const setFriends = (friends) => ({type: SET_FRIENDS, friends});
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE,currentPage});
export const setTotalUsersCount = (totalPage) => ({type:SET_TOTAL_USERS_COUNT,totalPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default friendsReducer;