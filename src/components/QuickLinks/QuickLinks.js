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
                    to='/trx'
                    currentPath={currentPath} />
                    <QuickLink
                    label='SOULFX'
                    to='/soulfx'
                    currentPath={currentPath} />
                </div>
            </div>
        }
        </>
    );
}

function QuickLink(props) {

    const linkToCurrentPage = (props.currentPath === props.to);

    return (
        <>
        {linkToCurrentPage
            ?
            <Link to={props.to}>
                <span className='curr_link'>{props.label}</span>
            </Link>
            : 
            <Link to={props.to}>
                <span className='bold inactive_link'>{props.label}</span>
            </Link>
        }
        </>
    );
}
