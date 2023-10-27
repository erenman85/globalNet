
import { followAC, setFriendsAC, unfollowAC } from "../../redux/friendsReducer";
import { connect } from "react-redux";
import UsersC from "./FriendsClass";


const mapStateToProps = (state) => {
  return {
    friends: state.friendsPages.friends

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
    }
  }

}

const FriendsContainer = connect (mapStateToProps, mapDispathToProps) (UsersC);

export default FriendsContainer;