import {
    Link,
    useLocation
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './QuickLinks.css';

export default function QuickLinks() {

    const currentURL = (useLocation().pathname);

    const onHomePage = (currentURL === '/');

    // links to render
    const quickLinks = [
        {
            label: 'LOBLAW',
            url: '/ops-transaction-logs'
        },
        {
            label: 'SOULFX',
            url: '/patient-support-app'
        },
        {
            label: 'FASSB',
            url: '/employment-services-transformation'
        }
    ]

    const renderQuickLinks = quickLinks.map(quickLink => (
        <QuickLink
        key={uuidv4()}
        label={quickLink.label}
        url={quickLink.url}
        currentURL={currentURL} />
    ))    

    // render if user is NOT on the landing page
    return (
        <>
        {(!onHomePage)
            &&
            <div id='quick-links'>
                <div className='quick-link_container'>
                    {renderQuickLinks}
                </div>
            </div>
        }
        </>
    );
}

function QuickLink({ currentURL, label, url }) {

    // check if link path is the current route and style accordingly
    const styleQuickLink = (currentURL === url)
    ? 'current-link'
    : 'bold active-link';

    return (
        <Link to={url}>
            <span className={`quick-link ${styleQuickLink}`}>{label}</span>
        </Link>
    );
}
