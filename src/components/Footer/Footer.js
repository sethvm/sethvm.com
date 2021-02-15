import React from 'react';
import './Footer.css';

export default function Footer(props) {
    return (
        <footer id={props.type} className='animate__animated animate__fadeIn'>
            <div className='footer_txt'>
                <h6>Designed + built by Seth Morenos</h6>
            </div>
        </footer>
    );
}
