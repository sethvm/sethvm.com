import React from 'react';
import {
    Link
} from 'react-router-dom';

import FooterText from './FooterText';

import './Footer.css';

import '../animate.min.css';
import '../fonts/Futura PT_Light.css';
import '../fonts/Futura PT_Book.css';
import '../fonts/Futura_Demi.css';

export default function NotHome() {
    return (
        <div id='footer' className='animated fadeIn'>
            <AlbertLink /> | <FASSBLink /> | <VectorLink />
            <br />
            <br />
            <FooterText />
        </div>
    );
}

function AlbertLink() {
    return (
        <Link to='/albert' className='link footer_txt'><strong>PROJECT ALBERT</strong></Link>
    );
}

function FASSBLink() {
    return (
        <Link to='/fassb' className='link footer_txt'><strong>FASSB</strong></Link>
    );
}

function VectorLink() {
    return(
        <Link to='/vector' className='link footer_txt'><strong>VECTOR COLLECTION</strong></Link>
    );
}
