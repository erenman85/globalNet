import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src='https://e7.pngegg.com/pngimages/184/387/png-clipart-black-earth-illustration-globe-world-map-computer-icons-global-miscellaneous-monochrome.png'/>
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login :
                <NavLink to={'/login'}>login</NavLink>}
        
        </div>
    </header>
  )
}
export default Header;