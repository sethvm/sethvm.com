/*project banner*/
import React from 'react';
import './Banner.css';

export default function Banner(props) {
    return (
        <div className='banner'>
            <img className='banner_img' src={props.img} alt={props.alt} />
        </div>
    );
}
