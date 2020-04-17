import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import HomeLink from './HomeLink';
import HeaderDropDown from './HeaderDropDown';

import './Header.css';

export default class PageHeader extends React.Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
        this.state = { expanded: false };
    }

    toggleNav() {
        this.setState({ expanded: !this.state.expanded });
    }

    closeDropDown() {
        this.setState({ expanded: false });
    }

    render() {
        return (
            <div className='nav-page animated fadeIn'>
                <Navbar className='nav_banner' expand='1024px'
                expanded={this.state.expanded}
                onToggle={this.toggleNav}>
                    <HomeLink />
                    <HeaderDropDown
                    closeDropDown={this.closeDropDown} />
                    <Nav.Link className='nav-desktop-page link' as={Link} to='/about'><strong>ABOUT</strong></Nav.Link>
                </Navbar>
            </div>
        );
    }
}
