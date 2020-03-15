import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './bootstrap.min.css';
import './animate.min.css';
import './components/Header.css';

import './fonts/Futura PT_Light.css';
import './fonts/Futura PT_Book.css';
import './fonts/Futura_Demi.css';

import resumeFile from './pdf/sethvm_resume.pdf';

class Header extends Component {
    render() {
        return (
            <div className='header animated fadeIn'>
                <Navbar className='nav_banner' bg='transparent' expand='lg'>
                    <Navbar.Brand className='navbar_left' href={''}>SETH MORENOS</Navbar.Brand>
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
                            <Nav.Link className='nav_item' href={''}>About</Nav.Link>
                            <Nav.Link className='nav_item' href={resumeFile}>Resume</Nav.Link>
                            <Nav.Link className='nav_item' href={''}>LinkedIn</Nav.Link>
                            <Nav.Link className='nav_item' href={''}>Behance</Nav.Link>
                            <Nav.Link className='nav_item' href={''}>GitHub</Nav.Link>
                            <Nav.Link className='nav_item' href={''}>Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className='desktop_nav' href={''}>ABOUT</Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;
