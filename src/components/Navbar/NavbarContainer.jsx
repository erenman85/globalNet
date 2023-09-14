import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    state: state.sidebarPages

  }
};

const NavbarContainer = connect (mapStateToProps) (Navbar);


export default NavbarContainer;