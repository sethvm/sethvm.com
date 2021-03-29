// google analytics component
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

export default function TrackPageViews() {

    const location = useLocation();
    const trackerID = 'UA-152533938-2';

    useEffect(() => {
        ReactGA.initialize(trackerID, {
            standardImplementation: true
        });
        console.log('ReactGA initialized');
    }, []);

    useEffect(() => {
        ReactGA.pageview(location.pathname);
        console.log('page_path: ' + location.pathname);
    }, [location.pathname]);

    return null;
}
