import React, { Component } from 'react';

import './animate.min.css';
import './components/Footer.css';

import './fonts/Futura PT_Light.css';
import './fonts/Futura PT_Book.css';
import './fonts/Futura_Demi.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer animated fadeIn'>
                <div className='footer_txt'>
                    Created by Seth Morenos, 2020
                </div>
            </div>
        );
    }
}

export default Footer;
