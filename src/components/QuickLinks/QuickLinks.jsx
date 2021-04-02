import {
    Link,
    useLocation
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './QuickLinks.css';

function QuickLinks() {

    // links to render
    const quickLinks = [
        {
            url: '/ops-transaction-logs',
            label: 'LOBLAW',
        },
        {
            url: '/patient-support-app',
            label: 'SOULFX'
        },
        {
            url: '/employment-services-transformation',
            label: 'FASSB'
        }
    ]
    return quickLinks;
}

export default function RenderQuickLinks() {

    const currentURL = (useLocation().pathname);

    const onHomePage = (currentURL === '/');

    const renderQuickLinks = QuickLinks().map(quickLink => {

        // check if link path is the current route and style accordingly
        const styleQuickLink = (currentURL === quickLink.url)
        ? 'current-link'
        : 'bold active-link';

        return (
            <Link
            key={uuidv4()}
            to={quickLink.url}>
                <span className={`quick-link ${styleQuickLink}`}>{quickLink.label}</span>
            </Link>
        );
    })

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
