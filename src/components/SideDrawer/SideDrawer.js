import React from 'react';
import {Link} from 'react-router-dom';

import './SideDrawer.css'

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
  <nav className={drawerClasses}>
     <button> X </button>
      <ul>
         <li> <Link to="/home"> Home </Link> </li>
         <li> <Link to="/about"> About </Link> </li>
         <li> <Link to="/contact"> Contact </Link> </li>
      </ul>
  </nav>
  );
};

export default SideDrawer;