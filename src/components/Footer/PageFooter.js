import React from 'react';
import {
    Link
} from 'react-router-dom';

import FooterText from './FooterText';

import './Footer.css';
import '../fonts/Futura PT_Light.css';
import '../fonts/Futura PT_Book.css';
import '../fonts/Futura_Demi.css';

export default function PageFooter() {
    return (
        <div id='footer-page' className='animated fadeIn'>
            <FooterLink to='/albert' text='PROJECT ALBERT' /> |&nbsp;
            <FooterLink to='/fassb' text='FASSB' /> |&nbsp;
            <FooterLink to='/vector' text='VECTOR COLLECTION' />
            <br />
            <br />
            <FooterText />
        </div>
    );
}

function FooterLink(props) {
    return (
        <Link to={props.to} className='footer_txt link'><strong>{props.text}</strong></Link>
    );
}
