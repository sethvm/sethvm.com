/*A variant of the Section component
- use in about page
- utilize larger text*/
import React from 'react';
import './IndentNoBar.css';

export default function Indent(props) {
    return (
        <div className='indent_nobar animate__animated animate__fadeIn'>
            {props.children}
        </div>
    );
}
