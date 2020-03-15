import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Header from './Header';
import App from './App';
import PortfolioCarousel from './Carousel';
import SideBar from './SideBar';
import Footer from './Footer';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('content'));
ReactDOM.render(<PortfolioCarousel />, document.getElementById('carousel'));
ReactDOM.render(<SideBar />, document.getElementById('sidebar'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
