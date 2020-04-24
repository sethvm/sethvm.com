import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import HomeLink from './HomeLink';
import HeaderDropDown from './HeaderDropDown';
import './Header.css';

export default function PageHeader() {
    
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
        <div className='nav-page animated fadeIn'>
            <Navbar className='nav_banner' expand='1024px'
            expanded={expanded}
            onToggle={toggleNav}>
                <HomeLink />
                <HeaderDropDown 
                expanded={expanded}
                closeNav={closeNav} />
                <Nav.Link className='nav-desktop-page link' as={Link} to='/about'><strong>ABOUT</strong></Nav.Link>
            </Navbar>
        </div>
    );
}
