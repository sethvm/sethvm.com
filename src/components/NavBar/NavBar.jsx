import {
    useState,
    useEffect,
    createRef,
    useCallback
} from 'react';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import { useScreenWidth } from '../customHooks/useScreenWidth';
import navStyle from './NavBar.module.css';

export default function NavBar() {

    const screenWidth = useScreenWidth();
    const [ expanded, setExpanded ] = useState(false);

    const toggleButton = createRef();

    const toggleNav = () => {
        setTimeout(() => { setExpanded(!expanded) }, 160);
    }

    const closeNav = useCallback(() => {
        setTimeout(() => { setExpanded(false) }, 160);
    }, []);

    // close overlay on outside click if open
    const handleClick = useCallback((e) => {
        if (toggleButton.current.contains(e.target) || expanded === false) return;
        closeNav();
    }, [expanded, toggleButton, closeNav]);

    // navbar event listener
    useEffect(() => { 
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [handleClick]);

    return (
        <nav id={navStyle.navbar}
        className='animate__animated animate__fadeIn'
        aria-label='navbar'>
            <Link
            className={navStyle.brand}
            aria-label='Seth Morenos'
            to='/'>
                <span style={{ color: '#004080' }}>SETH</span>&nbsp;
                <span style={{ color: '#1A1A1A' }}>MORENOS</span>
            </Link>
            <div
            className={navStyle.toggleBtn}
            aria-label='toggle menu'
            tabIndex='0'
            onClick={toggleNav}
            ref={toggleButton}>
                <Hamburger
                color='#004080'
                size={24}
                toggled={expanded}
                toggle={setExpanded}
                label='Show Menu'/>
            </div>
            <div
            className={`${navStyle.overlay} ${ expanded ? navStyle.active : navStyle.inactive }`}
            aria-label='navbar menu'
            onClick={() => handleClick}>
                <ul>
                    <li>
                        <Link
                        to='/'
                        aria-label='Work'>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                        to='/about'
                        aria-label='About'>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
            {(screenWidth >= 992) &&
                <Link
                aria-label='About'
                to='/about'>
                    <div className={navStyle.desktop}>ABOUT</div>
                </Link>
            }
        </nav>
    );
}
