import React from 'react';

import FooterText from './FooterText';

import './animate.min.css';
import './Footer.css';

import './fonts/Futura PT_Light.css';
import './fonts/Futura PT_Book.css';
import './fonts/Futura_Demi.css';

export default function HomeFooter() {
    return (
        <div id='homefooter' className='footer animated fadeIn'>
            <FooterText />
        </div>
    );
}
