import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import './animate.min.css';
import './index.css';
import './home.css';
import './style.css';

import Albert from './svg/albert-carousel.svg';
import FASSB from './svg/fassb-carousel.svg';
import Vector from './svg/formula1-carousel.svg';

class PortfolioCarousel extends Component {
    render() {
        return (
            <Carousel 
            infiniteLoop={true} 
            showThumbs={false} 
            showIndicators={false}
            showStatus={true}
            useKeyboardArrows={true} 
            autoPlay={true}
            className='animated slideInUp'>
                <div>
                    <img className='carousel-img' src={Albert} alt={''}/>
                </div>
                <div>
                    <img className='carousel-img' src={FASSB} alt={''}/>
                </div>
                <div>
                    <img className='carousel-img' src={Vector} alt={''}/>
                </div>
            </Carousel>
        );
    }
}

export default PortfolioCarousel;
