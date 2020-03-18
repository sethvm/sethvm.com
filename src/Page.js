import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import './components/animate.min.css';

import Header from './components/Header';

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
