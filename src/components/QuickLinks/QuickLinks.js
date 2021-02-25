import React from 'react';
import { Link,
    useLocation } from 'react-router-dom';
import './QuickLinks.css';

export default function QuickLinks() {

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

function QuickLink(props) {

    const linkToCurrentPage = (props.currentPath === props.path);

    return (
        <>
        {linkToCurrentPage
            ?
            <Link to={props.path}>
                <span className='curr_link'>{props.label}</span>
            </Link>
            : 
            <Link to={props.path}>
                <span className='bold active_link rounded_link'>{props.label}</span>
            </Link>
        }
        </>
    );
}
