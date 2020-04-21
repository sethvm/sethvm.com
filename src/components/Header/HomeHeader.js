import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import HomeLink from './HomeLink';
import HeaderDropDown from './HeaderDropDown';

import './Header.css';

export default function HomeHeader() {

    const [ expanded, setExpanded ] = useState(false);

    function toggleNav() {
        const newExpanded = expanded;
        setExpanded(!newExpanded);
    }

    function closeNav() {
        const newExpanded = false;
        setExpanded(newExpanded);
    }

    return (
        <div className='nav-home animated fadeIn'>
            <Navbar className='nav_banner' expand='1024px'
            expanded={expanded}
            onToggle={toggleNav}>
                <HomeLink />
                <HeaderDropDown
                closeNav={closeNav} />
                <Nav.Link className='nav-desktop-home link' as={Link} to='/about'>ABOUT</Nav.Link>
            </Navbar>
        </div>
    );
}
