import React from 'react';
import './SideBar.css';

import ResumeFile from '../../pdf/sethvm_resume.pdf';
import ResumeLogo from './resume-logo.svg';
import LinkedInLogo from './linkedin-logo.svg';
import BehanceLogo from './behance-logo.svg';
import GitHubLogo from './github-logo.svg';
import ContactLogo from './contact-logo.svg';

export default function SideBar() {
    return (
        <div className='sidebar animated fadeIn'>
            <SideBarItem href={ResumeFile} img={ResumeLogo} alt='Resume' />
            <SideBarItem href='https://github.com/sethvm' img={GitHubLogo} alt='github.com/sethvm' />
            <SideBarItem href='https://www.behance.net/sethvm/' img={BehanceLogo} alt='behance.net/sethvm' />
            <SideBarItem href='https://www.linkedin.com/in/sethvm' img={LinkedInLogo} alt='linkedin.com/in/sethvm' />
            <SideBarItem href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca' img={ContactLogo} alt='contact' />
        </div>
    );
}

function SideBarItem(props) {
    return (
        <a rel='noopener noreferrer' href={props.href} target='_blank'>
            <img src={props.img} alt={props.alt} className='sidebar_item' />
        </a>
    );
}
