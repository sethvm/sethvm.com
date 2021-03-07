// flexbox container for displaying an image(s)
import React from 'react';
import './ImgFluid.css';

export default function ImgFluid(props) {
    return (
        <div className='image_flex'>
            {props.children}
        </div>
    );
}
