
import { followAC, setFriendsAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/friendsReducer";
import { connect } from "react-redux";
import Friends from "./Friends";



class UsersC extends React.Component {
  componentDidMount() {
   //ajax request
     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
       .then(response =>{
          this.props.setFriends(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount)
        })
  }
  //постраничный вывод списка юзеров
  onPageChanged = (pageNumber) => {
   this.props.setCurrentPage(pageNumber);
   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
       .then(response =>{
          this.props.setFriends(response.data.items);
        })

  }

  render() {
   let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
   let pages = [];
   for(let i = 1; i <= pagesCount; i++) {
       pages.push(i);
   }
   let curP = this.props.currentPage;
   let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
   let curPL = curP + 5;
   let slicedPages = pages.slice( curPF, curPL);

   return <div>
     <div className={classes.pageNumber}>{slicedPages.map(p => {
       return <span className={this.props.currentPage === p && classes.selectPage}
       onClick={(e) => {this.onPageChanged(p)}}>
         {p}
        </span>
     })}
     </div>
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