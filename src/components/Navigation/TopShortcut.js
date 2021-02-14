import React from 'react';
import BackToTop from 'react-back-to-top-button';
import './TopShortcut.css';

import UpArrowLogo from './up-arrow.svg';

export default function TopShortcut(props) {

    if (props.isHome) {
        return (
            <BackToTop 
            className='no_show'
            showAt={Number.POSITIVE_INFINITY}
            speed={0} />
        );
    } else {
        return (
            <BackToTop
            showAt={800}
            speed={1800}>
                <img 
                src={UpArrowLogo} 
                className='shortcut_logo' 
                alt='Back to Top' />
            </BackToTop>
        );
    }
}
