// flexbox container for displaying an image(s)
import React from 'react';
import './ImgFluid.css';

export default function ImgFluid({ children }) {
    return (
        <div className='image_flex'>
            {children}
        </div>
    );
}
