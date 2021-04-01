import { Fragment } from 'react';
import {
    Link,
    useLocation
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './QuickLinks.css';

export default function RenderQuickLinks() {

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

    // check if user is on the landing page
    const currentURL = (useLocation().pathname);
    const userOnHomePage = (currentURL === '/');

    return (
        <>
        {userOnHomePage
            ? null
            :
            <div id='quick-links'>
                <div className='quick-link_container'>
                    {quickLinks.map((quickLink) => (
                        <Fragment key={uuidv4()}>
                            <QuickLink
                            label={quickLink.label}
                            url={quickLink.url}
                            currentURL={currentURL} />
                        </Fragment>
                    ))}
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
