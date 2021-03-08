import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

export default function TrackPageViews() {

    const location = useLocation();

    ReactGA.initialize('UA-152533938-2');
    console.log('ReactGA initialized');

    useEffect(() => {
        ReactGA.pageview(location.pathname);
        console.log(location.pathname);
    }, [location.pathname]);

    return null;
}
