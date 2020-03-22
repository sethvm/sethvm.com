import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    Link
} from 'react-router-dom';

import './bootstrap.min.css';
import './animate.min.css';
import './Header.css';

import './fonts/Futura PT_Light.css';
import './fonts/Futura PT_Book.css';
import './fonts/Futura_Demi.css';

import resumeFile from './pdf/sethvm_resume.pdf';

export default function HeaderDropDown() {
    return (
        <>
        <Navbar.Toggle className='mobile_nav' aria-controls='navbarNav'>
            <span>
                <>
                <div className='menu_bar'></div>
                <div className='menu_bar'></div>
                <div className='menu_bar'></div>
                </>
            </span>
        </Navbar.Toggle>
        <Navbar.Collapse id='navbarNav'>
            <Nav className='nav_drop'>
                <Nav.Link className='nav_item' as={Link} to='/about'>About</Nav.Link>
                <Nav.Link className='nav_item' rel='noopener noreferrer' href={resumeFile} target={'_blank'}>Resume</Nav.Link>
                <Nav.Link className='nav_item' rel='noopener noreferrer' href={'https://www.linkedin.com/in/sethvm'} target={'_blank'}>LinkedIn</Nav.Link>
                <Nav.Link className='nav_item' rel='noopener noreferrer' href={'https://www.behance.net/sethvm/'} target={'_blank'}>Behance</Nav.Link>
                <Nav.Link className='nav_item' rel='noopener noreferrer' href={'https://github.com/sethvm'} target={'_blank'}>GitHub</Nav.Link>
                <Nav.Link className='nav_item' rel='noopener noreferrer' href={'mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'} target={'_blank'}>Contact Me</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Nav.Link className='desktop_nav link' as={Link} to='/about'>ABOUT</Nav.Link>
        </>
    );
}
