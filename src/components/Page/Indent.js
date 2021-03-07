// A variant of the Section component
// - use to highlight important quotes
// - utilize larger text
import React from 'react';
import './Indent.css';

export default function Indent(props) {
    return (
        <div className='indent animate__animated animate__fadeIn'>
            {props.children}
        </div>
    );
}
