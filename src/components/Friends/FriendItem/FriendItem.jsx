import React from "react";
import classes from './../Friends.module.css';
import { NavLink } from "react-router-dom";


const FriendItem = (props) => {
  let path = '/friends/'+ props.id;
  let activeLink = classes.activeLink;
  return (
    <div className= {classes.friend }>
    <NavLink to= {path}
     className={({ isActive }) =>
       isActive ? activeLink : classes.item}> 
        <img className={classes.avatar} src= {props.avatar}/> {props.name}
    </NavLink>  
  </div>

  )
}


export default FriendItem;