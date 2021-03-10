// project banner
import React from 'react';
import './Banner.css';

export default function Banner({ img, alt }) {
    return (
        <div className='banner animate__animated animate__fadeIn'>
            <img className='banner_img' src={img} alt={alt} />
        </div>
    );
}
