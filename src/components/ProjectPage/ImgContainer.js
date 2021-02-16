/*jumbotron-like component
- use as container to highlight the most important sections*/
import React from 'react';
import './ImgContainer.css';

export default function ImgContainer(props) {
    return (
        <div className='image animate__animated animate__fadeIn'>
            {props.children}
        </div>
    );
}
