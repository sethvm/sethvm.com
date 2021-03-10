// for providing brief image descriptions
// - place at the bottom of each image
import React from 'react';
import './ImgCaption.css';

export default function ImgCaption({ children }) {
    return (
        <div className='image_caption'>
            <p>
                <span className='italic'>{children}</span>
            </p>
        </div>
    );
}
