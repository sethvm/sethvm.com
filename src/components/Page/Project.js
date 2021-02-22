import React from 'react';
import './Project.css';

export default function Project(props) {
    return (
        <div className='project'>
            {props.children}
        </div>
    );
}
