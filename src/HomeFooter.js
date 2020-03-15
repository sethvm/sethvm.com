import React from 'react';

import './animate.min.css';
import './components/HomeFooter.css';

import './fonts/Futura PT_Light.css';
import './fonts/Futura PT_Book.css';
import './fonts/Futura_Demi.css';

function HomeFooter() {
    return (
        <div className='footer animated fadeIn'>
            <div className='footer_txt'>
                Created by Seth Morenos, 2020
            </div>
        </div>
    );
}

export default HomeFooter;
