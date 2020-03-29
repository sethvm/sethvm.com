import React from 'react';

import './ContactInfo.css';
import '../fonts/Futura PT_Light.css';
import '../fonts/Futura PT_Book.css';
import '../fonts/Futura_Demi.css';

export default function ContactInfo() {
    return (
        <div id='contact'>
            <Email /> | <LinkedIn />
        </div>
    );
}

function Email() {
    return (
        <a rel='noopener noreferrer' className='contact_txt' href={'mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'} target={'_blank'}><strong>EMAIL</strong></a>
    );
}

function LinkedIn() {
    return (
        <a rel='noopener noreferrer' className='contact_txt' href={'https://www.linkedin.com/in/sethvm'} target={'_blank'}><strong>LINKEDIN</strong></a>
    );
}
