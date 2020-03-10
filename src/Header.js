import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

/*import './bootstrap.min.css';*/
import 'bootstrap/dist/css/bootstrap.min.css';
import './animate.min.css';
import './style.css';
import './home.css';

import './fonts/Futura PT_Light.css';
import './fonts/Futura PT_Book.css';
import './fonts/Futura_Demi.css';

import resumeFile from './pdf/sethvm_resume.pdf';

function Header() {
    return (
        <div className='header animated fadeIn'>
            <div className='nav_banner navbar navbar-light d-print'>
                    <a className='navbar_left navbar-brand' href={''}><strong>SETH MORENOS</strong></a>
                    <button className='mobile_nav navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls="navbarNav" aria-label="Toggle navigation">
                        <span>
                            <div className="menu_bar"></div>
                            <div className="menu_bar"></div>
                            <div className="menu_bar"></div>
                        </span>
                    </button>
                    <div id='navbarNav' className='collapse navbar-collapse'>
                        <div className='navbar-nav'>
                            <div className='nav_drop'>
                                <a className="nav-item nav-link active" href={''}>About</a>
                                <a className="nav-item nav-link active" href={resumeFile}>Resume</a>
                                <a className="nav-item nav-link active" href={'https://www.linkedin.com/in/sethvm/'}>LinkedIn</a>
                                <a className="nav-item nav-link active" href={'https://www.behance.net/sethvm/'}>Behance</a>
                                <a className="nav-item nav-link active" href={'https://github.com/sethvm'}>GitHub</a>
                                <a className="nav-item nav-link active" href={'mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'}>Conact Me</a>
                            </div>
                        </div>
                    </div>
                <a className='desktop_nav navbar-brand' href={''}>ABOUT</a>
            </div>
        </div>
    );
}

export default Header;
