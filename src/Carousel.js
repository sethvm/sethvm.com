import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import './bootstrap.min.css';
import './animate.min.css';
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
            showStatus={false} 
            showThumbs={false} 
            useKeyboardArrows={true} 
            autoPlay={true}
            width={'60vw'}>
                <div>
                    <img src={Albert}/>
                </div>
                <div>
                    <img src={FASSB}/>
                </div>
                <div>
                    <img src={Vector}/>
                </div>
            </Carousel>
        );
    }
}

export default PortfolioCarousel;
