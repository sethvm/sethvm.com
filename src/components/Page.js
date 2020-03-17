import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import HomeCarousel from './Carousel';
import SideBar from './SideBar';
import Footer from './Footer';

export default function Page() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/' render={Home} />
                <Route exact={true} path='/about' render={NotHome} />
            </Switch>
        </BrowserRouter>
    );
}

function Home() {
    return (
        <>
            <Header />
            <Content />
            <HomeCarousel />
            <SideBar />
            <Footer />
        </> 
    );
}

function NotHome() {
    return (
        <>
            <Header />
            <Content />
            <SideBar />
            <Footer />
        </> 
    );
}
