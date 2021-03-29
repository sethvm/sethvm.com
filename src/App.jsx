import {
    Suspense,
    lazy
} from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// page scripts
import TrackPageViews from './components/Analytics/TrackPageViews';
import ScrollToTop from './components/Navigation/ScrollToTop';

// component imports
import Container from './components/Page/Container';
import LoadingBody from './components/LoadingState/LoadingBody';
import NavBar from './components/NavBar/NavBar';
import BlueBlock from './components/BlueBlock/BlueBlock';
import QuickLinks from './components/QuickLinks/QuickLinks';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

// page body content
const Home = lazy(() => import('./pages/Home'));
const Error = lazy(() => import('./pages/Error'));
const About = lazy(() => import('./pages/About'));
const EST = lazy(() => import('./pages/EST'));
const Soulfx = lazy(() => import('./pages/Soulfx'));
const TRX = lazy(() => import('./pages/TRX'));

export default function App() {
    return (
        <HashRouter>
            <TrackPageViews />
            <ScrollToTop />
            <Container>
                <NavBar />
                <BlueBlock />
                <Suspense fallback={<LoadingBody />}>
                    <Switch>
                        <Route exact
                        path='/'
                        render={() => <Home />} />
                        <Route exact
                        path='/about'
                        render={() => <About />} />
                        <Route exact
                        path='/trx'
                        render={() => <TRX />} />
                        <Route exact
                        path='/soulfx'
                        render={() => <Soulfx />} />
                        <Route exact
                        path='/est'
                        render={() => <EST />} />
                        <Route
                        render={() => <Error />} />
                    </Switch>
                </Suspense>
                <QuickLinks />
                <SideBar />
                <Footer />
            </Container>
        </HashRouter>
    );
}
