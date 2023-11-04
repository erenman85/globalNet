
import { followAC, setFriendsAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/friendsReducer";
import { connect } from "react-redux";
import UsersC from "./UserC";


const mapStateToProps = (state) => {
  return {
    friends: state.friendsPages.friends,
    pageSize: state.friendsPages.pageSize,
    totalUsersCount: state.friendsPages.totalUsersCount,
    currentPage:state.friendsPages.currentPage

  }
};
const mapDispathToProps = (dispatch) => {
  return {
    follow: (friendsId) => {
      dispatch(followAC(friendsId));
    },
    unfollow: (friendsId) => {
      dispatch(unfollowAC(friendsId))
    },
    setFriends: (friends) => {
      dispatch(setFriendsAC(friends))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalUsers) => {
      dispatch(setTotalUsersCountAC(totalUsers))
    }
  }

}

const FriendsContainer = connect (mapStateToProps, mapDispathToProps) (UsersC);

export default FriendsContainer;