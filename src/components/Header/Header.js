import React, { 
    useState, 
    useRef, 
    useEffect, 
    useCallback } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import './Header.css';

import SVMLogo from './brand.svg';
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
        }, 80);
    }, [expanded, closeNav]);

    useEffect(() => { 
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [handleClick]);

    return (
        <header className={props.pageType}>
            <Navbar className='nav_banner' 
            expand='1024px'
            expanded={expanded}
            onToggle={toggleNav}>
                <Nav.Link className='name link' as={Link} to='/'>
                    <span className='blue'>SETH</span> <span>MORENOS</span>
                </Nav.Link>
                <Nav.Link className='branding link' as={Link} to='/'>
                    <img className='svm_logo' src={SVMLogo} alt='SETH MORENOS' />
                </Nav.Link>
                <Navbar.Toggle className='mobile_nav' aria-controls='nav-dropdown'
                ref={node}>
                    <Hamburger 
                    color='#004080' 
                    size={25} 
                    toggled={expanded} 
                    toggle={setExpanded}
                    label='Show Menu'/>
                </Navbar.Toggle>
                <Navbar.Collapse id='nav-dropdown'>
                    <Nav className='nav_drop' 
                    onClick={() => handleClick}>
                        <Nav.Link className='nav_item' as={Link} to='/'><span class='bold'>Work</span></Nav.Link>
                        <Nav.Link className='nav_item' as={Link} to='/about'><span class='bold'>About</span></Nav.Link>
                        <ExtLink href={ResumeFile} label='Résumé' />
                    </Nav>
                </Navbar.Collapse>
                <div className='nav_right'>
                    <Nav.Link className='nav-desktop link' as={Link} to='/about'>
                        ABOUT
                    </Nav.Link>
                </div>
            </Navbar>
        </header>
    );
}

function ExtLink(props) {
    return (
        <Nav.Link className='nav_item' rel='noopener noreferrer' href={props.href} target='_blank'>
            <span class='bold'>{props.label}</span>
        </Nav.Link>
    );
}
