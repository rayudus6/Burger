import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NAvItems';
import Toggle from '../SideDrawer/Toogle/Toggle';

const toolbar =(props) =>(
    <header className={classes.Toolbar}>
        <Toggle clicked={props.toggleDrawer}/>
        <Logo />
        <nav className={classes.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
)

export default toolbar;