import React from "react";
import classes from "./Friends.module.css";
import FriendItem from "./FriendItem/FriendItem";



const Friends = (props) => {

  debugger;
  let friendsElements = props.state.friends
     .map(friend => <FriendItem name= {friend.name} id= {friend.id} avatar= {friend.avatar} />);  
   return (
   <div className={classes.Friends}>
    {friendsElements}
   </div>
  )
}

export default Friends;