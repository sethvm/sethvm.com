import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Carousel.css';

import Albert from '../albert/albert-carousel.svg';
import FASSB from '../fassb/fassb-carousel.svg';
import Soulfx from '../soulfx/soulfx-carousel.svg';

export default function HomeCarousel() {
    return(
        <Carousel id='carousel' className='animate__animated animate__fadeInUp'
        keyboard={true}
        indicators={true}
        interval={4000}>
            <Carousel.Item>
                <Item link='/soulfx' img={Soulfx} alt='Soulfx patient support app' />
            </Carousel.Item>
            <Carousel.Item>
                <Item link='/albert' img={Albert} alt='Project Albert' />
            </Carousel.Item>
            <Carousel.Item>
                <Item link='/fassb' img={FASSB} alt='FASSB UI/UX' />
            </Carousel.Item>
        </Carousel>
    );
}

function Item(props) {
    return (
        <Link to={props.link}>
            <img src={props.img} className='carousel-img' alt={props.alt} />
        </Link>
    );
}
