/*project banner*/
import React from 'react';
import './Banner.css';

export default function Banner(props) {
    return (
        <div className='banner animate__animated animate__fadeIn'>
            <img className='banner_img' src={props.img} alt={props.alt} />
        </div>
    );
}
