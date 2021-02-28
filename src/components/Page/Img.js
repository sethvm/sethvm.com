import React from 'react';
import './Img.css';

export default function Image(props) {
    return (
        <img className='image_item' src={props.src} alt={props.alt} />
    );
}
