import React from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';
import ScrollToTop from './components/TopShortcut/ScrollToTop';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// component imports
import Header from './components/Header/Header';

/*rework sidebar*/
import SideBar from './components/SideBar/SideBar';

import TopShortcut from './components/TopShortcut/TopShortcut';
import BlueBlock from './components/BlueBlock/BlueBlock';
import Footer from './components/Footer/Footer';

// page body content
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Soulfx from './pages/Soulfx';
import Albert from './pages/Albert';
import FASSB from './pages/FASSB';
import Visuals from './pages/Visuals';

export default function App() {
    return (
        <HashRouter>
        <ScrollToTop />
            <Switch>
                <Route exact={true} path='/' component={HomePage} />
                <Route exact={false} path='/' component={Page} />
            </Switch>
        </HashRouter>
    );
}

function HomePage() {
    return (
        <>
        <Header 
        pageType='nav-home animate__animated animate__fadeIn' 
        aboutType='nav-desktop-home link' />
        <BlueBlock />
        <Home />
        <SideBar />
        <Footer isHome={true} />
        </>
    );
}

function Page() {
    return (
        <>
        <Header 
        pageType='nav-page' 
        aboutType='nav-desktop-page link' />
        <div className='content'>
            <Switch>
                <Route exact={true} path='/about' component={About} />
                <Route exact={true} path='/albert' component={Albert} />
                <Route exact={true} path='/fassb' component={FASSB} />
                <Route exact={true} path='/soulfx' component={Soulfx} />
                <Route exact={true} path='/visuals' component={Visuals} />
                <Route component={Error} />
            </Switch>
        </div>
        <SideBar />
        <Footer isHome={false} />
        <TopShortcut />
        </>
    );
}
