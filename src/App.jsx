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

// components
import Wrapper from './components/Page/Wrapper';
import NavBar from './components/NavBar/NavBar';
import BlueBlock from './components/BlueBlock/BlueBlock';
import QuickLinks from './components/QuickLinks/QuickLinks';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

// loading state
import Loading from './pages/Loading';

// page body content
const Home = lazy(() => import('./pages/Home'));
const Error = lazy(() => import('./pages/Error'));
const About = lazy(() => import('./pages/About'));
const FASSB = lazy(() => import('./pages/FASSB'));
const Soulfx = lazy(() => import('./pages/Soulfx'));
const Loblaw = lazy(() => import('./pages/Loblaw'));

export default function App() {
    return (
        <HashRouter>
            <TrackPageViews />
            <ScrollToTop />
            <Wrapper>
                <NavBar />
                <BlueBlock />
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route exact
                        path='/'
                        render={() => <Home />} />
                        <Route exact
                        path='/about'
                        render={() => <About />} />
                        <Route exact
                        path='/ops-transaction-logs'
                        render={() => <Loblaw />} />
                        <Route exact
                        path='/patient-support-app'
                        render={() => <Soulfx />} />
                        <Route exact
                        path='/employment-services-transformation'
                        render={() => <FASSB />} />
                        <Route
                        render={() => <Error />} />
                    </Switch>
                </Suspense>
                <QuickLinks />
                <SideBar />
                <Footer />
            </Wrapper>
        </HashRouter>
    );
}
