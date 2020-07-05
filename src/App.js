import React from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';
import ScrollToTop from './components/TopShortcut/ScrollToTop';
import './components/animate.min.css';
import './components/bootstrap.min.css';

import Home from './pages/Home';
import About from './pages/About';
import Albert from './pages/Albert';
import FASSB from './pages/FASSB';
import Vector from './pages/Vector';

export default function App() {
    return (
        <HashRouter>
        <ScrollToTop />
            <Switch>
                <Route exact={true} path='/' component={LandingPage} />
                <Route exact={false} path='/' component={Page} />
            </Switch>
        </HashRouter>
    );
}

function LandingPage() {
    return(
        <Home />
    );
}

function Page() {
    return(
        <Switch>
            <Route exact={true} path='/about' component={About} />
            <Route exact={true} path='/albert' component={Albert} />
            <Route exact={true} path='/fassb' component={FASSB} />
            <Route exact={true} path='/vector' component={Vector} />
        </Switch>
    );
}
