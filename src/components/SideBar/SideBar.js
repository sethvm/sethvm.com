import React from 'react';
import './SideBar.css';

// item logo imports
import ContactLogo from './contact-logo.svg';
import LinkedInLogo from './linkedin-logo.svg';
import ResumeLogo from './resume-logo.svg';

// file imports
import ResumeFile from '../../pdf/sethvm_resume.pdf';

export default function SideBar() {
    return (
        <div className='sidebar animate__animated animate__fadeIn'>
            <SideBarItem href='https://www.linkedin.com/in/sethvm' img={LinkedInLogo} alt='linkedin.com/in/sethvm' />
            <SideBarItem href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca' img={ContactLogo} alt='contact' />
            <SideBarItem href={ResumeFile} img={ResumeLogo} alt='resume' />
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
