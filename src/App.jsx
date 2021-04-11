import {
    useState,
    useEffect,
    Suspense,
    lazy
} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import 'animate.css/animate.min.css';

// page scripts
import TrackPageViews from './components/Analytics/TrackPageViews';
import ScrollToTop from './components/Navigation/ScrollToTop';

// components
import Container from './components/Page/Container';
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

    const [ screenWidth, setScreenWidth ] = useState(window.screen.width);

    const updateScreenWidth = () => {
        const newWidth = window.screen.width;
        setScreenWidth(newWidth);
    }

    useEffect(() => {
        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        }
    }, [])

    return (
        <Router>
            <TrackPageViews />
            <ScrollToTop />
            <NavBar
            screenWidth={screenWidth} />
            <Container>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route exact
                        path='/'
                        render={() => <Home />} />
                        <Route exact
                        path='/about'
                        render={() => <About />} />
                        <Route exact
                        path='/order-pick-history'
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
            </Container>
            <SideBar />
            <Footer />
            <BlueBlock
            screenWidth={screenWidth} />
        </Router>
    );
}
