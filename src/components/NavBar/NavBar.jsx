import {
    useState,
    useEffect,
    useCallback,
    createRef
} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import './NavBar.css';

// files
import ResumeFile from '../../pdf/sethvm_resume.pdf';

export default function NavBar() {

    const [ expanded, setExpanded ] = useState(false);
    
    const node = createRef();

    const toggleNav = () => {
        setExpanded(!expanded);
    }

    const closeNav = useCallback(() => {
        setExpanded(false);
    }, []);

    // dropdown outside-click-close interaction
    const handleClick = useCallback((e) => {
        if (node.current.contains(e.target) || expanded === false) return;
        setTimeout(() => { closeNav(); }, 80);
    }, [expanded, node, closeNav]);

    // navbar event listener
    useEffect(() => { 
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [handleClick]);

    return (
        <Navbar
        id='navbar'
        className='animate__animated animate__fadeIn'
        expand='lg'
        expanded={expanded}
        onToggle={toggleNav}>
            <Nav.Link
            className='nav-brand-name link'
            as={Link}
            to='/'>
                <span className='blue'>SETH</span>&nbsp;
                <span>MORENOS</span>
            </Nav.Link>
            <Navbar.Toggle
            className='nav-mobile-toggle'
            aria-controls='nav-dropdown'
            ref={node}>
                <Hamburger
                color='#004080'
                size={24}
                toggled={expanded}
                toggle={setExpanded}
                label='Show Menu'/>
            </Navbar.Toggle>
            <Navbar.Collapse
            id='nav-dropdown'>
                <Nav
                className='nav-drop-overlay'
                onClick={() => handleClick}>
                    <Nav.Link
                    className='nav-overlay-item'
                    as={Link}
                    to='/'>
                        <span className='bold'>Work</span>
                    </Nav.Link>
                    <Nav.Link
                    className='nav-overlay-item'
                    as={Link}
                    to='/about'>
                        <span className='bold'>About</span>
                    </Nav.Link>
                    <Nav.Link
                    className='nav-overlay-item'
                    rel='noopener noreferrer'
                    href={ResumeFile}
                    target='_blank'>
                        <span className='bold'>Résumé</span>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav.Link
            className='nav-desktop link'
            as={Link}
            to='/about'>
                ABOUT
            </Nav.Link>
        </Navbar>
    );
}
