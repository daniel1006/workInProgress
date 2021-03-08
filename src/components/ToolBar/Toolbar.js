import React from 'react';
import {Link} from 'react-router-dom';
import DrawerToggle from '../SideDrawer/DrawerToggle';

import './Toolbar.css';

import Logo from '../ToolBar/Logo.png';

// Short cut from using curly braces
const toolbar = props => (
   

    <header className="Toolbar">
        <nav className="Toolbar-Nav">
            <div className="toolbar-toggle-button">
                <DrawerToggle click={props.drawerClickHandler} />
            </div>
            <div className="Toolbar-logo"> <Link to="/"> <img src={Logo} title="Logo" /> </Link> </div>
            <div className="Spacer" ></div>
            <div className="Toolbar-nav-list">
                <ul>
                    <li> <Link to="/home"> Home </Link> </li>
                    <li> <Link to="/about"> About </Link> </li>
                    <li> <Link to="/contact"> Contact </Link> </li>
                </ul>
            </div>
        </nav>
    </header>


);

export default toolbar;