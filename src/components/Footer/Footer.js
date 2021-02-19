import React from 'react';
import { Link,
    useLocation } from 'react-router-dom';
import './Footer.css';

export default function FooterRender() {

    const location = useLocation();
    const isHome = (location.pathname === '/');

    return (
        <>
        {isHome
            ? <Footer type='footer_home animate__animated animate__fadeIn' />
            : <Footer
                type='footer_page animate__animated animate__fadeIn'>
                <div className='quick_links'>
                    <QuickLink
                    label='TRX'
                    to={null}
                    currPath={location.pathname} />
                    <QuickLink
                    label='SOULFX'
                    to='/soulfx'
                    currPath={location.pathname} />
                    <QuickLink
                    label='PRISM'
                    to={null}
                    currPath={location.pathname} />
                </div>
            </Footer>
        }
        </>
    );
}

function Footer(props) {
    return (
        <footer id='footer' className={props.type}>
            {props.children}
            <div className='footer_txt'>
                <h6>Designed + developed by Seth Morenos</h6>
            </div>
        </footer>
    );
}

function QuickLink(props) {

    const isCurrPage = (props.currPath === props.to);

    return (
        <>
        {isCurrPage
            ? <Link to={props.to}>
                <span className='curr_link'>{props.label}</span>
                </Link>
            : <Link to={props.to}>
                <span className='bold inactive_link'>{props.label}</span>
                </Link>
        }
        </>
    );
}
