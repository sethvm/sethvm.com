import React from 'react';

import './ProfileLink.css';

export default function ProfileLink(props) {
    return(
        <a rel='noopener noreferrer' className='link_txt' href={props.href} target='_blank'>
            <strong>{props.label}</strong>
        </a>
    );
}