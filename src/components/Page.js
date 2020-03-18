import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import './animate.min.css';

import Header from './Header';

import Home from './Home';
import About from './About';
import Albert from './Albert';
import FASSB from './FASSB';
import Vector from './Vector';

import HomeCarousel from './Carousel';
import SideBar from './SideBar';

import HomeFooter from './HomeFooter';
import PageFooter from './PageFooter';

export default function Page() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route exact={true} path='/about' component={About} />
                <Route exact={true} path='/albert' component={Albert} />
                <Route exact={true} path='/fassb' component={FASSB} />
                <Route exact={true} path='/vector' component={Vector} />
            </Switch>
            <Switch>
                <Route exact={true} path='/' component={HomeCarousel} />
            </Switch>
            <SideBar />
            <Switch>
                <Route exact={true} path='/' component={HomeFooter} />
                <Route exact={false} path='/' component={PageFooter} />
            </Switch>
        </BrowserRouter>
    );
}
