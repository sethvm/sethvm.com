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
                <Route path='/about' component={About}/>
                <Route path='/albert' component={Albert}/>
                <Route path='/fassb' component={FASSB}/>
                <Route path='/vector' component={Vector}/>
            </Switch>
        </BrowserRouter>
    );
}
