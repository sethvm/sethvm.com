import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer(props) {
    if (props.isHome) {
        return (
            <HomeFooter />
        );
    } else {
        return (
            <PageFooter />
        );
    }
}

function HomeFooter() {
    return (
        <footer id='footer-home' className='animated fadeIn'>
            <FooterText />
        </footer>
    );
}

function PageFooter() {
    return (
        <footer id='footer-page' className='animated fadeIn'>
            <FooterLink to='/projects' text='PROJECTS' /> |&nbsp;
            <FooterLink to='/about' text='ABOUT' /> |&nbsp;
            <a rel='noopener noreferrer' href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca' target='_blank'>
                <span className='footer_txt link'>
                    <strong>GET IN TOUCH</strong>
                </span>
            </a>
            <br />
            <br />
            <FooterText />
        </footer>
    );
}

function FooterText() {
    return(
        <div className='footer_txt'>Designed + built by Seth Morenos<br /></div>
    );
}

function FooterLink(props) {
    return (
        <Link to={props.to} className='footer_txt link'><strong>{props.text}</strong></Link>
    );
}
