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
                <Route path='/' component={Home}/>
                <Route path='/about'>
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
