import React from 'react';

import '../animate.min.css';
import ResumeFile from '../pdf/sethvm_resume.pdf';

import './SideBar.css';
import ResumeLogo from './resume-logo.svg';
import LinkedInLogo from './linkedin-logo.svg';
import BehanceLogo from './behance-logo.svg';
import GitHubLogo from './github-logo.svg';
import ContactLogo from './contact-logo.svg';

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className='side_items animated fadeIn'>
                <SideBarItem href={ResumeFile} img={ResumeLogo} alt='Resume' />
                <p><br /></p>
                <SideBarItem href='https://www.linkedin.com/in/sethvm' img={LinkedInLogo} alt='linkedin.com/in/sethvm' />
                <p><br /></p>
                <SideBarItem href='https://www.behance.net/sethvm/' img={BehanceLogo} alt='behance.net/sethvm' />
                <p><br /></p>
                <SideBarItem href='https://github.com/sethvm' img={GitHubLogo} alt='github.com/sethvm' />
                <p><br /></p>
                <SideBarItem href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca' img={ContactLogo} alt='contact' />
            </div>
        </div>
    );
}

function SideBarItem(props) {
    return (
        <a rel='noopener noreferrer' href={props.href} target='_blank'>
            <img src={props.img} alt={props.alt} className='side_logo' />
        </a>
    );
}
