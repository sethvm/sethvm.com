import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import './animate.min.css';
import './Footer.css';

import './fonts/Futura PT_Light.css';
import './fonts/Futura PT_Book.css';
import './fonts/Futura_Demi.css';

export default function Footer() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route component={NotHome} />
            </Switch>
        </BrowserRouter>
    );
}

function Home() {
    return (
        <div id='homefooter' className='footer animated fadeIn'>
            <FooterText />
        </div>
    );
}

function NotHome() {
    return (
        <div id='footer' className='animated fadeIn'>
            <AlbertLink /> | <FASSBLink /> | <VectorLink />
            <br />
            <br />
            <FooterText />
        </div>
    );
}

function FooterText() {
    return(
        <div className='footer_txt'>Created by Seth Morenos, 2020</div>
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
