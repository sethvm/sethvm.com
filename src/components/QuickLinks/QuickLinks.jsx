import { memo } from 'react';
import {
    Link,
    useLocation
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import quickLinkStyle from './QuickLinks.module.css';
import { quickLinkData } from './quickLinkData';

export default function QuickLinkContainer() {

    const currentURL = (useLocation().pathname);
    const onHomePage = (currentURL === '/');
    const onAboutPage = (currentURL === '/about');

    // render based on current page
    return (
        <>
        {onAboutPage &&
            <div className={quickLinkStyle.prompt}>
                <h3 className={`heavy`}>
                    Scrolled this far?
                    <br />
                    <br />Check out some of my work ↓
                </h3>
            </div>
        }
        {!onHomePage && !onAboutPage &&
            <div className={quickLinkStyle.prompt}>
                <h3 className='heavy'>
                    Scrolled this far?
                    <br />
                    <br />Check out more of my work ↓
                </h3>
            </div>
        }
        {!onHomePage &&
            <nav
            id={quickLinkStyle.quickLinks}
            aria-label='project links'>
                <div className={quickLinkStyle.container}>
                    <MemoizedQuickLinks
                    currentURL={currentURL}/>
                </div>
            </nav>
        }
        </>
    );
}

const MemoizedQuickLinks = memo(function QuickLinks({ currentURL }) {

    return (
        <>
        {quickLinkData.map(quickLink => {

            // check if link path is the current route and style accordingly
            const isCurrentPage = (currentURL === quickLink.url)
            ? quickLinkStyle.currentLink
            : 'heavy activeLink';

            return (
                <Link
                key={uuidv4()}
                to={quickLink.url}>
                    <span className={`${quickLinkStyle.link} ${isCurrentPage}`}>
                        {quickLink.label}
                    </span>
                </Link>
            );
        })}
        </>
    );
});
