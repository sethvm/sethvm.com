import React from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';
import './components/animate.min.css';
import './components/bootstrap.min.css';

import './App.css';

import HomeHeader from './components/Header/HomeHeader';
import PageHeader from './components/Header/PageHeader';
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

export default function App() {
    return (
        <HashRouter>
        <ScrollToTop />
            <Switch>
                <Route exact={true} path='/' component={Landing} />
                <Route exact={false} path='/' component={Page} />
            </Switch>
        </HashRouter>
    );
}

function Landing() {
    return(
        <>
        <HomeHeader />
        <Home />
        <HomeCarousel />
        <SideBar />
        <BlueBlock />
        <HomeFooter />
        </>
    );
}

function Page() {
    return(
        <>
        <PageHeader />
        <PageContent>
            <Switch>
                <Route exact={true} path='/about' component={About} />
                <Route exact={true} path='/albert' component={Albert} />
                <Route exact={true} path='/fassb' component={FASSB} />
                <Route exact={true} path='/vector' component={Vector} />
            </Switch>
            <TopShortcut />
        </PageContent>
        <SideBar />
        <PageFooter />
        </>
    );
}

function PageContent(props) {
    return (
        <div className='page_content'>
            {props.children}
        </div>
    );
}
