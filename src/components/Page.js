import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import PortfolioCarousel from './Carousel';
import SideBar from './SideBar';
import Footer from './Footer';

export default function Page() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/about' component={NotHome} />
            </Switch>
        </BrowserRouter>
    );
}

function Home() {
    return (
        <>
            <Header />
            <Content />
            <PortfolioCarousel />
            <SideBar />
            <Footer />
        </> 
    )
}

function NotHome() {
    return (
        <>
            <Header />
            <Content />
            <SideBar />
            <Footer />
        </> 
    )
}
