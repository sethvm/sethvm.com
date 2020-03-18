import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import HomeCarousel from './Carousel';
import SideBar from './SideBar';
import Footer from './Footer';

export default function Page() {
    return (
        <BrowserRouter>
            <Header />
            <Content />
            <Switch>
                <Route exact={true} path='/' component={HomeCarousel} />
            </Switch>
            <SideBar />
            <Footer />
        </BrowserRouter>
    );
}
