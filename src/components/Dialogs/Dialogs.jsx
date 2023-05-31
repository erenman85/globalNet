import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dailogs_items}>
        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to= '/dialogs/1'>Erentsen </NavLink>  
        </div>
        <div className={classes.dialog}>
          <NavLink to= '/dialogs/2'>Saglara </NavLink>
        </div>
        <div className={classes.dialog}>
           <NavLink to= '/dialogs/3'>Chingis</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to= '/dialogs/4'> Mama </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to= '/dialogs/5'> Papa </NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi!</div>
        <div className={classes.message}>what </div>
        <div className={classes.message}>yo!</div>
      </div>
    </div>

  )
}






export default Dialogs;