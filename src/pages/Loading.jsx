// page body loading state
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Loading.css';

// components
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';

export default function RenderLoadingBody() {

    // check if user is on home page and style accordingly
    const userOnHomePage = (useLocation().pathname === '/');
    const styleLoadingBody = userOnHomePage ? 'home' : null;

    // reset scroll position when page finishes loading
    useEffect(() => {
        return () => window.scrollTo(0, 0);
    });

    return (
        <main className={`loading ${styleLoadingBody}`}>
            <div className='loadingContainer'>
                <LoadingIcon />
            </div>
        </main>
    );
}
