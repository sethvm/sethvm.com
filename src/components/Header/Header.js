import React, { 
    useState, 
    useRef, 
    useEffect, 
    useCallback } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Header.css';

import ResumeFile from '../../pdf/sethvm_resume.pdf';

export default function Header(props) {

    const [ expanded, setExpanded ] = useState(false);
    const node = useRef();

    function toggleNav() {
        const newExpanded = expanded;
        setExpanded(!newExpanded);
    }

    const closeNav = useCallback(() => {
        const newExpanded = false;
        setExpanded(newExpanded);
    }, []);

    const handleClick = useCallback((e) => {
        if (node.current.contains(e.target) || expanded === false) {
            return;
        }
        setTimeout(() => {
            closeNav();
        }, 70);
    }, [expanded, closeNav]);

    useEffect(() => { 
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [handleClick] );

    return (
        <header className={props.pageType}>
            <Navbar className='nav_banner' 
            expand='1024px'
            expanded={expanded}
            onToggle={toggleNav}>
                <Nav.Link className='name link' as={Link} to='/'>
                    SETH MORENOS
                </Nav.Link>
                <Navbar.Toggle className='mobile_nav' aria-controls='nav-dropdown'
                ref={node}>
                    <span>
                        <div className='menu_bar' />
                        <div className='menu_bar' />
                        <div className='menu_bar' />
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id='nav-dropdown'>
                    <Nav className='nav_drop' 
                    onClick={() => handleClick}>
                        <Nav.Link className='nav_item' as={Link} to='/about'><strong>About</strong></Nav.Link>
                        <ExtLink href={ResumeFile} label='Resume' />
                        <ExtLink href='https://www.github.com/sethvm' label='GitHub' />
                        <ExtLink href='https://www.figma.com/@sethvm' label='Figma'/>
                        <ExtLink href='https://www.linkedin.com/in/sethvm' label='Linkedin' />
                        <ExtLink href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca' label='Email' />
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link className={props.aboutType} as={Link} to='/about'>
                    ABOUT
                </Nav.Link>
            </Navbar>
        </header>
    );
}

function ExtLink(props) {
    return (
        <Nav.Link className='nav_item' rel='noopener noreferrer' href={props.href} target='_blank'>
            <strong>{props.label}</strong>
        </Nav.Link>
    );
}
