import React from 'react';
import { useLocation } from 'react-router-dom';
import './BlueBlock.css';

export default function BlueBlock() {

    const currentPath = (useLocation().pathname);
    const userOnHomePage = (currentPath === '/');

    return (
        <>
        {userOnHomePage
            ? <span className='block-blue animate__animated animate__fadeInLeft' />
            : <span className='block-blue thin animate__animated animate__fadeInRight' />
        }
        </>
    );
}
