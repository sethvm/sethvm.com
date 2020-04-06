import React from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';

import './components/animate.min.css';
import './components/bootstrap.min.css';
import HomeHeader from './components/Header/HomeHeader';
import PageHeader from './components//Header/PageHeader';
import Home from './components/Home';
import About from './components/About';
import Albert from './components/Albert';
import FASSB from './components/FASSB';
import Vector from './components/Vector';
import BlueBlock from './components/BlueBlock/BlueBlock'
import HomeCarousel from './components/Carousel/Carousel';
import SideBar from './components/SideBar/SideBar';
import TopShortcut from './components/TopShortcut/TopShortcut';
import ScrollToTop from './components/TopShortcut/ScrollToTop';
import HomeFooter from './components/Footer/HomeFooter';
import PageFooter from './components/Footer/PageFooter';

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
    return(
        <>
        <HomeHeader />
        <Home />
        <BlueBlock />
        <HomeCarousel />
        <SideBar />
        <HomeFooter />
        </>
    );
}

function RegPage() {
    return(
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
        <TopShortcut />
        <PageFooter />
        </>
    );
}
