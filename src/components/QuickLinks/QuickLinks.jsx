import {
    Link,
    useLocation
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './QuickLinks.css';

export default function QuickLinkContainer() {

    const currentURL = (useLocation().pathname);

    const onHomePage = (currentURL === '/');

    // render if user is NOT on the landing page
    return (
        <>
        {(!onHomePage)
            &&
            <nav
            id='quick-links'
            aria-label='project links'>
                <div
                className='quick-link_container'>
                    <QuickLinks
                    currentURL={currentURL}/>
                </div>
            </nav>
        }
        </>
    );
}

function QuickLinks({ currentURL }) {

    // links to render
    const quickLinks = [
        {
            url: '/ops-pick-history',
            label: 'Loblaw',
        },
        {
            url: '/patient-support-app',
            label: 'Soulfx'
        },
        {
            url: '/employment-services-transformation',
            label: 'FASSB'
        }
    ]

    return (
        <>
        {quickLinks.map(quickLink => {

            // check if link path is the current route and style accordingly
            const styleQuickLink = (currentURL === quickLink.url)
            ? 'current-link'
            : 'bold active-link';

            return (
                <Link
                key={uuidv4()}
                to={quickLink.url}>
                    <span
                    className={`quick-link ${styleQuickLink}`}>
                        {quickLink.label}
                    </span>
                </Link>
            );
        })}
        </>
    );
}
