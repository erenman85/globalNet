
import React from "react";
import classes from "./Friends.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/userM.jpg"


class UsersC extends React.Component {
   
   constructor(props){
     super(props)
     axios.get('https://social-network.samuraijs.com/api/1.0/users')
       .then(response =>{
          this.props.setFriends(response.data.items);
       })
   }
   render() {
    return <div>
    {
      this.props.friends.map( u => <div key={u.id}>
          <div>
            <div>
              <img className={classes.avatar} src= {u.photos.small != null ? u.photos.small : userPhoto}/>
            </div>
            <div>
              {u.followed
              ?<button onClick={() => {this.props.unfollow(u.id)}}>unfollow</button>
              : <button onClick={() => {this.props.follow(u.id)}}>follow</button>}
            </div>
          </div>
          <div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{'u.location.city'}</div>
              <div>{'u.location.country'}</div>
            </div>
          </div>
        </div>
      )
    }
   </div> 
}
}
// const mapStateToProps = (state) => {
//   return {
//     friends: state.friendsPages.friends

//   }
// };
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
//     }
//   }

// }

// const FriendsContainer = connect (mapStateToProps, mapDispathToProps) (Friends);

export default UsersC;