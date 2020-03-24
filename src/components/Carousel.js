import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './animate.min.css';
import './Carousel.css';

import Albert from './albert/albert-carousel.svg';
import FASSB from './fassb/fassb-carousel.svg';
import Vector from './vector/vector-carousel.svg';

export default function HomeCarousel() {
    return(
        <Carousel id='carousel' className='animated fadeInUp'
        keyboard={true}
        indicators={true}
        interval={3000}>
            <Carousel.Item>
                <Link to='/albert'><img src={Albert} className='carousel_img' alt={''} /></Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to='/fassb'><img src={FASSB} className='carousel_img' alt={''} /></Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to='/vector'><img src={Vector} className='carousel_img' alt={''} /></Link>
            </Carousel.Item>
        </Carousel>
    );
}
