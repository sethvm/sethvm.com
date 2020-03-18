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
                <Route exact={true} path='/' component={Home} />
                <Route exact={true} path='/about' component={About} />
                <Route exact={true} path='/albert' component={Albert} />
                <Route exact={true} path='/fassb' component={FASSB} />
                <Route exact={true} path='/vector' component={Vector} />
            </Switch>
        </BrowserRouter>
    );
}
