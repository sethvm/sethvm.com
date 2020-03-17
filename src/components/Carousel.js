import React from 'react';
import { Carousel } from 'react-bootstrap';

import './animate.min.css';
import './Carousel.css';

import Albert from './svg/albert-carousel.svg';
import FASSB from './svg/fassb-carousel.svg';
import Vector from './svg/formula1-carousel.svg';

export default function HomeCarousel() {
    return (
        <div id='carousel'>
            <Carousel
            indicators={false}>
                <Carousel.Item>
                    <img src={Albert} className='carousel_img' alt={''} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={FASSB} className='carousel_img' alt={''} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Vector} className='carousel_img' alt={''} />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
