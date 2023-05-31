import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const activeLink = classes.activeLink;

const Navbar = () => {
  return (
    <nav className={classes.sidebar}>
          <div className={classes.item}>
            <NavLink to='/profile'
             className={({ isActive }) =>
                 isActive ? activeLink : classes.item} >
                   Profile
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/dialogs'
               className={({ isActive }) =>
                 isActive ? activeLink : classes.item} >
                   Messages
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='news'
              className={({ isActive }) =>
                isActive ? activeLink : classes.item} >
                  News
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='music'
               className={({ isActive }) =>
                 isActive ? activeLink : classes.item} >
                  Music
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='settings'
               className={({ isActive }) =>
                isActive ? activeLink : classes.item} >
                 Settings
            </NavLink>
          </div>
        </nav>
  )
}
export default Navbar;