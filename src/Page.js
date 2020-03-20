import React from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';

import './components/animate.min.css';

import ScrollToTop from './components/ScrollToTop';

import HomeHeader from './components/HomeHeader';
import PageHeader from './components/PageHeader';

import Home from './components/Home';
import About from './components/About';
import Albert from './components/Albert';
import FASSB from './components/FASSB';
import Vector from './components/Vector';

import HomeCarousel from './components/Carousel';
import SideBar from './components/SideBar';

import HomeFooter from './components/HomeFooter';
import PageFooter from './components/PageFooter';

export default function Page() {
    return (
        <HashRouter>
            <Switch>
                <Route exact={true} path='/' component={HomePage} />
                <Route exact={false} path='/' component={RegPage} />
            </Switch>
        </HashRouter>
    );
}

function HomePage() {
    return (
        <div id='wrapper'>
            <>
            <HomeHeader />
            <Home />
            <HomeCarousel />
            <SideBar />
            <HomeFooter />
            </>
        </div>
    );
}

function RegPage() {
    return(
        <div id='wrapper'>
            <>
            <ScrollToTop />
            <PageHeader />
            <Switch>
                <Route exact={true} path='/about' component={About} />
                <Route exact={true} path='/albert' component={Albert} />
                <Route exact={true} path='/fassb' component={FASSB} />
                <Route exact={true} path='/vector' component={Vector} />
            </Switch>
            <SideBar />
            <PageFooter />
            </>
        </div>
    );
}
