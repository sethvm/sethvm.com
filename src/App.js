import React from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';
import ScrollToTop from './components/Navigation/ScrollToTop';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// component imports
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import TopShortcut from './components/Navigation/TopShortcut';
import BlueBlock from './components/BlueBlock/BlueBlock';
import Footer from './components/Footer/Footer';

// page body content
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import SoulfxOld from './pages/Soulfx';
import Albert from './pages/Albert';
import FASSB from './pages/FASSB';
/*import Visuals from './pages/Visuals';*/

/*template project page*/
import NewProject from './pages/NewProject';
import Soulfx from './pages/Soulfxv2';

export default function App() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Switch>
                <Route exact={true} path='/' component={HomePage} />
                <Route exact={false} path='/' component={Page} />
            </Switch>
            <SideBar />
            <Footer />
            <TopShortcut />
        </HashRouter>
    );
}

function HomePage() {
    return (
        <>
        <Header
        pageType='nav-home animate__animated animate__fadeIn' />
        <BlueBlock
        animation='block-blue animate__animated animate__fadeInLeft' />
        <Container>
            <Home />
        </Container>
        </>
    );
}

function Page() {
    return (
        <>
        <Header
        pageType='nav-page' />
        <BlueBlock
        animation='block-blue thin animate__animated animate__fadeInLeft' />
        <Container>
            <Switch>
                <Route exact={true} path='/soulfx' component={Soulfx} />
                <Route exact={true} path='/wip' component={NewProject} />
                <Route exact={true} path='/about' component={About} />
                <Route exact={true} path='/albert' component={Albert} />
                <Route exact={true} path='/fassb' component={FASSB} />
                <Route exact={true} path='/soulfxold' component={SoulfxOld} />
                <Route component={Error} />
            </Switch>
        </Container>
        </>
    );
}

function Container(props) {
    return (
        <div className='container'>
            {props.children}
        </div>
    );
}
