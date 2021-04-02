// google analytics component
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

export default function TrackPageViews() {

    const location = useLocation();
    const trackerID = 'UA-152533938-2';

    // initialize ReactGA with tracker id
    useEffect(() => {
        ReactGA.initialize(trackerID, {
            standardImplementation: true
        });
    }, []);

    // update page_path value and increment pageview count
    useEffect(() => {
        ReactGA.pageview(location.pathname);
    }, [location.pathname]);

    return null;
}
