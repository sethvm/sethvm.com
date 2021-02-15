/*for containing header-paragraph segments*/
import React from 'react';
import './Section.css';

export default function Section(props) {
    return (
        <div className='section'>
            {props.children}
        </div>
    );
}
