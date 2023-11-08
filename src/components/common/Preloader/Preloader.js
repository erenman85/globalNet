
import React from 'react';
import preloader from '../../../assets/icons/tube-spinner.svg';
import classes from './Preloader.module.css';





let Preloader = (props) => {
     return <div>
     <img className={classes.icon_spinner} src= {preloader}/> 
  </div>
}


export default Preloader;