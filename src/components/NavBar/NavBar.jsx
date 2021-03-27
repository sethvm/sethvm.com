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

// file imports
import ResumeFile from '../../pdf/sethvm_resume.pdf';

export default function NavBar() {

    const [ expanded, setExpanded ] = useState(false);
    const node = createRef();

    const toggleNav = () => {
        const newExpanded = expanded;
        setExpanded(!newExpanded);
    }

    const closeNav = useCallback(() => {
        const newExpanded = false;
        setExpanded(newExpanded);
    }, []);

    const handleClick = useCallback((e) => {
        if (node.current.contains(e.target) || expanded === false) return;
        setTimeout(() => { closeNav(); }, 80);
    }, [expanded, node, closeNav]);

    useEffect(() => { 
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [handleClick]);

    return (
        <header id='header' className='animate__animated animate__fadeIn'>
            <Navbar className='nav_banner' 
            expand='lg'
            expanded={expanded}
            onToggle={toggleNav}>
                <Nav.Link className='name link' as={Link} to='/'>
                    <span className='blue'>SETH</span> <span>MORENOS</span>
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
                        <Nav.Link className='nav_item' as={Link} to='/'><span className='bold'>Work</span></Nav.Link>
                        <Nav.Link className='nav_item' as={Link} to='/about'><span className='bold'>About</span></Nav.Link>
                        <Nav.Link className='nav_item' rel='noopener noreferrer' href={ResumeFile} target='_blank'>
                            <span className='bold'>Résumé</span>
                        </Nav.Link>
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
