// for providing brief image descriptions
// - place at the bottom of each image
import React from 'react';
import './ImgCaption.css';

export default function ImgCaption(props) {
    return (
        <div className='image_caption'>
            <p>
                <span className='italic'>{props.children}</span>
            </p>
        </div>
    );
}
