// for containing header-paragraph segments
import React from 'react';
import './Section.css';

export default function Section({ children }) {
    return (
        <div className='section animate__animated animate__fadeIn'>
            {children}
        </div>
    );
}
