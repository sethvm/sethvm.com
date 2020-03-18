import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Albert from './Albert';
import FASSB from './FASSB';
import Vector from './Vector';

export default function Content() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/'>
                    <Home />
                </Route>
                <Route exact={true} path='/about'>
                    <About />
                </Route>
                <Route path='/albert'>
                    <Albert />
                </Route>
                <Route path='/fassb'>
                    <FASSB />
                </Route>
                <Route path='/vector'>
                    <Vector />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
