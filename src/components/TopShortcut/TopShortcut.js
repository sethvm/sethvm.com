import React from 'react';
import BackToTop from 'react-back-to-top-button';
import './TopShortcut.css';

import UpArrowLogo from './up-arrow.svg';

export default function TopShortcut() {
    return(
        <BackToTop
        showAt={800}
        speed={1800}>
            <img src={UpArrowLogo} className='shortcut_logo' alt='back to top' />
        </BackToTop>
    );
}
