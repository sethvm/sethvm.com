import React from 'react';
import {
    Link
} from 'react-router-dom';
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
            <FooterLink to='/soulfx' text='SOULFX' /> |&nbsp;
            <FooterLink to='/albert' text='PROJECT ALBERT' /> |&nbsp;
            <FooterLink to='/fassb' text='FASSB' /> |&nbsp;
            <FooterLink to='/visuals' text='VISUAL DESIGNS' />
            <br />
            <br />
            <FooterText />
        </footer>
    );
}

function FooterText() {
    return(
        <div className='footer_txt'>Designed + built by Seth Morenos, 2020<br /></div>
    );
}

function FooterLink(props) {
    return (
        <Link to={props.to} className='footer_txt link'><strong>{props.text}</strong></Link>
    );
}
