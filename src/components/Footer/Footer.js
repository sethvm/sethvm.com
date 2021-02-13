import React from 'react';
import './Footer.css';

export default function FooterCondition(props) {
    if (props.isHome) {
        return (
            <Footer type='footer-home' />
        );
    } else {
        return (
            <Footer type='footer-page' />
        );
    }
}

function Footer(props) {
    return (
        <footer id={props.type} className='animate__animated animate__fadeIn'>
            <div className='footer_txt'>Designed + built by Seth Morenos<br /></div>
        </footer>
    );
}
