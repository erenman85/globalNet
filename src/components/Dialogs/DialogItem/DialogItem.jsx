import React from "react";
import classes from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
  let path = '/dialogs/'+ props.id;
  let activeLink = classes.activeLink;
  return (
    <div className= {classes.dialog }>
    <NavLink to= {path}
     className={({ isActive }) =>
       isActive ? activeLink : classes.item}> 
        <img className={classes.avatar} src= {props.avatar}/> {props.name}
    </NavLink>  
  </div>

  )
}


export default DialogItem;