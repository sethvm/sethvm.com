// jumbotron-like component
// - use as container to highlight the most important sections
import React from 'react';
import './ImgContainer.css';

export default function ImgContainer(props) {
    
    const clearContainer=(props.clear);

    return (
        <>
        {clearContainer
            ?
            <div
            className='clear image_container animate__animated animate__fadeIn'>
                {props.children}
            </div>
            :
            <div
            className='glass image_container animate__animated animate__fadeIn'>
                {props.children}
            </div>
        }
        </>
    );
}
