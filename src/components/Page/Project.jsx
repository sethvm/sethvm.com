// wrapper for every project page component
import React from 'react';
import './Project.css';

export default function Project({ children }) {
    return (
        <div className='project'>
            {children}
        </div>
    );
}
