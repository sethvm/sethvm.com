import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import './bootstrap.min.css';
import './animate.min.css';
import './Header.css';

import './fonts/Futura PT_Light.css';
import './fonts/Futura PT_Book.css';
import './fonts/Futura_Demi.css';

import resumeFile from './pdf/sethvm_resume.pdf';

export default function Header() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/'>
                    <div className='home_header animated fadeIn'>
                        <HomeMenu />
                    </div>
                </Route>
                <Route exact={false} path='/'>
                    <div className='header animated fadeIn'>
                        <HomeMenu />
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

function HomeMenu() {
    return (
        <Navbar className='nav_banner' expand='1024px'>
            <>
            <Switch>
                <Route exact={true} path='/'>
                    <Navbar.Brand className='home_name' href={'/'}>SETH MORENOS</Navbar.Brand>
                </Route>
                <Route exact={false} path='/'>
                    <Navbar.Brand className='name' href={'/'}>SETH MORENOS</Navbar.Brand>
                </Route>
            </Switch>
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
                    <Nav.Link className='nav_item' rel='noopener noreferrer' href={resumeFile} target={'_blank'}>Resume</Nav.Link>
                    <Nav.Link className='nav_item' rel='noopener noreferrer' href={'https://www.linkedin.com/in/sethvm'} target={'_blank'}>LinkedIn</Nav.Link>
                    <Nav.Link className='nav_item' rel='noopener noreferrer' href={'https://www.behance.net/sethvm/'} target={'_blank'}>Behance</Nav.Link>
                    <Nav.Link className='nav_item' rel='noopener noreferrer' href={'https://github.com/sethvm'} target={'_blank'}>GitHub</Nav.Link>
                    <Nav.Link className='nav_item' rel='noopener noreferrer' href={'mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'} target={'_blank'}>Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav.Link className='desktop_nav link' href={'/about'}>ABOUT</Nav.Link>
            </>
        </Navbar>
    );
}
