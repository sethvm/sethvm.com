import React from 'react';

import ResumeFile from '../pdf/sethvm_resume.pdf';

import './ContactInfo.css';
import '../fonts/Futura PT_Light.css';
import '../fonts/Futura PT_Book.css';
import '../fonts/Futura_Demi.css';

export default function ContactInfo() {
    return (
        <div id='contact'>
            <Contact label='EMAIL' href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca' /> |&nbsp;
            <Contact label='RESUME' href={ResumeFile} /> |&nbsp;
            <Contact label='LINKEDIN' href='https://www.linkedin.com/in/sethvm' />
        </div>
    );
}

function Contact(props) {
    return (
        <a rel='noopener noreferrer' className='contact_txt' href={props.href} target='_blank'>
            <strong>{props.label}</strong>
        </a>
    );
}
