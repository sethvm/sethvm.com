import {
    Link,
    useLocation
} from 'react-router-dom';
import './QuickLinks.css';

export default function RenderQuickLinks() {

    // check if user is on the landing page
    const currentPath = (useLocation().pathname);
    const userOnHomePage = (currentPath === '/');

    return (
        <>
        {userOnHomePage
            ? null
            :
            <div id='quick-links'>
                <div className='quick-link_container'>
                    <QuickLink
                    label='TRX'
                    path='/trx'
                    currentPath={currentPath} />
                    <QuickLink
                    label='SOULFX'
                    path='/soulfx'
                    currentPath={currentPath} />
                </div>
            </div>
        }
        </>
    );
}

function QuickLink({ label, path, currentPath }) {

    const linkToCurrentPage = (currentPath === path);

    return (
        <>
        {linkToCurrentPage
            ?
            <Link to={path}>
                <span className='curr_link'>{label}</span>
            </Link>
            : 
            <Link to={path}>
                <span className='bold active_link rounded_link'>{label}</span>
            </Link>
        }
        </>
    );
}
