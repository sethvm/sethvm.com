import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter,
    Link
} from 'react-router-dom';

import './bootstrap.min.css';
import './animate.min.css';
import './Header.css';

import './fonts/Futura PT_Light.css';
import './fonts/Futura PT_Book.css';
import './fonts/Futura_Demi.css';

import resumeFile from './pdf/sethvm_resume.pdf';

export default function Header() {
    return (
        <div className='header animated fadeIn'>
            <BrowserRouter>
                <Navbar className='nav_banner' bg='transparent' expand='1024px'>
                    <Navbar.Brand className='navbar_left' href={'/'}>SETH MORENOS</Navbar.Brand>
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
                            <Nav.Link className='nav_item' href={'/about'}>About</Nav.Link>
                            <Nav.Link className='nav_item' href={resumeFile}>Resume</Nav.Link>
                            <Nav.Link className='nav_item' href={'https://www.linkedin.com/in/sethvm'} target={'_blank'}>LinkedIn</Nav.Link>
                            <Nav.Link className='nav_item' href={'https://www.behance.net/sethvm/'} target={'_blank'}>Behance</Nav.Link>
                            <Nav.Link className='nav_item' href={'https://github.com/sethvm'} target={'_blank'}>GitHub</Nav.Link>
                            <Nav.Link className='nav_item' href={'mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'} target={'_blank'}>Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className='desktop_nav'><Link to='/about' className='link'>ABOUT</Link></Nav>
                </Navbar>
            </BrowserRouter>
        </div>
    );
}