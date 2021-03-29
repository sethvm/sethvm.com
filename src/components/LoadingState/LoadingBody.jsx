// used as page body loading state
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './LoadingBody.css';

// component imports
import Section from '../Page/Section';
import LoadingIcon from './LoadingIcon';

export default function RenderLoadingBody() {

    // check if user is on home page and style accordingly
    const userOnHomePage = (useLocation().pathname === '/');
    const styleLoadingBody = userOnHomePage ? 'home' : null;

    useEffect(() => {
        return () => window.scrollTo(0, 0);
    });

    return (
        <main className={`loading ${styleLoadingBody}`}>
            <Section>
                <LoadingIcon />
                <h2>
                    <div className='loading-msg'>
                        to-do: insert witty loading message
                    </div>
                </h2>
            </Section>
        </main>
    );
}
