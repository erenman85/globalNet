
import { followAC, setFriendsAC, unfollowAC } from "../../redux/friendsReducer";
import Friends from "./Friends";
import { connect } from "react-redux";


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

const FriendsContainer = connect (mapStateToProps, mapDispathToProps) (Friends);

export default FriendsContainer;