/*a container for highlighting text inside sections
- place within the same tier as paragraphs*/
import React from 'react';
import './IndentInner.css';

export default function IndentInner(props) {
    return (
        <div className='indent_inner animate__animated animate__fadeIn'>
            {props.children}
        </div>
    );
}
