import React from 'react';

import './animate.min.css';
import './SideBar.css';

import ResumeLogo from './SideBar/resume-logo.svg';
import LinkedInLogo from './SideBar/linkedin-logo.svg';
import BehanceLogo from './SideBar/behance-logo.svg';
import GitHubLogo from './SideBar/github-logo.svg';
import ContactLogo from './SideBar/contact-logo.svg';

import ResumeFile from './pdf/sethvm_resume.pdf';

export default class SideBar extends React.Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='side_items animated fadeIn'>
                    <a rel='noopener noreferrer' href={ResumeFile} target={'_blank'}><img src={ResumeLogo} alt={'Resume'} className='side_logo' /></a>
                    <p><br /></p>
                    <a rel='noopener noreferrer' href={'https://www.linkedin.com/in/sethvm'} target={'_blank'}><img src={LinkedInLogo} alt={'linkedin.com/in/sethvm'} className='side_logo' /></a>
                    <p><br /></p>
                    <a rel='noopener noreferrer' href={'https://www.behance.net/sethvm/'} target={'_blank'}><img src={BehanceLogo} alt={'behance.net/sethvm'} className='side_logo' /></a>
                    <p><br /></p>
                    <a rel='noopener noreferrer' href={'https://github.com/sethvm'} target={'_blank'}><img src={GitHubLogo} alt={'github.com/sethvm'} className='side_logo' /></a>
                    <p><br /></p>
                    <a rel='noopener noreferrer' href={'mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'} target={'_blank'}><img src={ContactLogo} alt={'Contact Me'} className='side_logo' /></a>
                </div>
            </div>
        );
    }
}
