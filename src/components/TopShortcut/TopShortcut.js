import React from 'react';
import BackToTop from 'react-back-to-top-button';

import './TopShortcut.css';

import UpArrowLogo from './up-arrow.svg';

export default class TopShortcut extends React.Component {
    render() {
        return(
            <BackToTop
            showAt={64}
            speed={2000}>
                <div className='top_shortcut'>
                    <img src={UpArrowLogo} className='shortcut_logo' alt={'back to top'}/>
                </div>
            </BackToTop>
        );
    }
}
