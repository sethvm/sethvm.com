import React from 'react';
import BackToTop from 'react-back-to-top-button';

import './TopShortcut.css';

import contactLogo from './TopShortcut/up-arrow.svg';

export default function TopShortcut() {
    return (
        <BackToTop
        showAt={64}
        speed={2000}>
            <div className='top_shortcut'>
                <img src={contactLogo} className='shortcut_logo' alt={'back to top'}/>
            </div>
        </BackToTop>
    );
}
