import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src='https://e7.pngegg.com/pngimages/184/387/png-clipart-black-earth-illustration-globe-world-map-computer-icons-global-miscellaneous-monochrome.png'/>
    </header>
  )
}
export default Header;