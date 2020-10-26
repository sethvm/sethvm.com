import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Carousel.css';

import Albert from '../albert/albert-carousel.svg';
import FASSB from '../fassb/fassb-carousel.svg';
import Soulfx from '../soulfx/soulfx-carousel.svg';
import Visuals from '../visuals/vector-carousel.svg';

export default function HomeCarousel() {
    return(
        <Carousel id='carousel' className='animated fadeInUp'
        keyboard={true}
        indicators={true}
        interval={4200}>
            <Carousel.Item>
                <Item link='/soulfx' img={Soulfx} alt='Soulfx' />
            </Carousel.Item>
            <Carousel.Item>
                <Item link='/albert' img={Albert} alt='Project Albert' />
            </Carousel.Item>
            <Carousel.Item>
                <Item link='/fassb' img={FASSB} alt='FASSB' />
            </Carousel.Item>
            <Carousel.Item>
                <Item link='/visuals' img={Visuals} alt='Visual Design Collection' />
            </Carousel.Item>
        </Carousel>
    );
}

function Item(props) {
    return (
        <Link to={props.link}>
            <img src={props.img} className='carousel_img' alt={props.alt} />
        </Link>
    );
}
