import React from "react";
import axios from "axios";
import { follow, setFriends, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/friendsReducer";
import { connect } from "react-redux";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";


class UsersC extends React.Component {
  componentDidMount() {
   //ajax request
     this.props.toggleIsFetching(true);
     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
       .then(response =>{
          this.props.toggleIsFetching(false);
          this.props.setFriends(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount)
        })
  }
  //постраничный вывод списка юзеров
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
   this.props.setCurrentPage(pageNumber);
   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
       .then(response =>{
        this.props.toggleIsFetching(false);
          this.props.setFriends(response.data.items);
        })

  }

  render() {
   return <div>
     {this.props.isFetching ? <Preloader /> : null}
    <Friends  currentPage = {this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    friends = {this.props.friends}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}
                    totalUsersCount ={this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}

   />
   </div>
}
}


const mapStateToProps = (state) => {
  return {
    friends: state.friendsPages.friends,
    pageSize: state.friendsPages.pageSize,
    totalUsersCount: state.friendsPages.totalUsersCount,
    currentPage:state.friendsPages.currentPage,
    isFetching: state.friendsPages.isFetching

  }
};
// const mapDispathToProps = (dispatch) => {
//   return {
//     follow: (friendsId) => {
//       dispatch(followAC(friendsId));
//     },
//     unfollow: (friendsId) => {
//       dispatch(unfollowAC(friendsId))
//     },
//     setFriends: (friends) => {
//       dispatch(setFriendsAC(friends))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalUsers) => {
//       dispatch(setTotalUsersCountAC(totalUsers))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }

// }

const FriendsContainer = connect (mapStateToProps, {
  follow,
  unfollow,
  setFriends,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
}) (UsersC);

export default FriendsContainer;