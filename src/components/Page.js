import React from 'react';

import Header from './Header';
import Content from './Content';
import PortfolioCarousel from './Carousel';
import SideBar from './SideBar';
import Footer from './Footer';

export default function Page() {
    return (
        <>
        <Header />
        <Content />
        <PortfolioCarousel />
        <SideBar />
        <Footer />
        </>
    );
}
