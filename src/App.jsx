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
import TrackPageViews from './components/Analytics/TrackPageViews';
import ScrollToTop from './components/Navigation/ScrollToTop';

// component imports
import Container from './components/Page/Container';
import LoadingBody from './components/LoadingState/LoadingBody';
import Header from './components/Header/Header';
import BlueBlock from './components/BlueBlock/BlueBlock';
import TopShortcut from './components/Navigation/TopShortcut';
import QuickLinks from './components/QuickLinks/QuickLinks';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

// page body content
const Home = lazy(() => import('./pages/Home'));
const Error = lazy(() => import('./pages/Error'));
const About = lazy(() => import('./pages/About'));
const Soulfx = lazy(() => import('./pages/Soulfx'));
const TRX = lazy(() => import('./pages/TRX'));

export default function App() {
    return (
        <HashRouter>
            <TrackPageViews />
            <ScrollToTop />
            <Container>
                <Header />
                <BlueBlock />
                <Suspense fallback={<LoadingBody />}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/trx' component={TRX} />
                        <Route exact path='/soulfx' component={Soulfx} />
                        <Route component={Error} />
                    </Switch>
                </Suspense>
                <QuickLinks />
                <SideBar />
                <Footer />
                <TopShortcut />
            </Container>
        </HashRouter>
    );
}
