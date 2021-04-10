import {
    Link,
    useLocation
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import quickLinksStyle from './QuickLinks.module.css';

export default function QuickLinkContainer() {

    const currentURL = (useLocation().pathname);

    const onHomePage = (currentURL === '/');

    // render if user is NOT on the landing page
    return (
        <>
        {(!onHomePage)
            &&
            <nav
            id={quickLinksStyle.quickLinks}
            aria-label='project links'>
                <div
                className={quickLinksStyle.container}>
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
            url: '/order-pick-history',
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
            ? quickLinksStyle.currentLink
            : 'bold activeLink';

            return (
                <Link
                key={uuidv4()}
                to={quickLink.url}>
                    <span
                    className={`${quickLinksStyle.link} ${styleQuickLink}`}>
                        {quickLink.label}
                    </span>
                </Link>
            );
        })}
        </>
    );
}
