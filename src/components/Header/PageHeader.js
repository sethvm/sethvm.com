import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    Link
} from 'react-router-dom';
import HeaderDropDown from './HeaderDropDown';

import './Header.css';
import '../fonts/Futura PT_Light.css';
import '../fonts/Futura PT_Book.css';
import '../fonts/Futura_Demi.css';

export default class PageHeader extends React.Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.collapseOnSelect = this.collapseOnSelect.bind(this);
        this.state = { expanded: false };
    }

    toggleNav() {
        this.setState({ expanded: !this.state.expanded });
    }

    collapseOnSelect() {
        this.setState({ expanded: false });
    }

    render() {
        return (
            <div className='header animated fadeIn'>
                <Navbar className='nav_banner' expand='1024px' 
                onToggle={this.toggleNav}
                expanded={this.state.expanded}>
                    <Nav.Link className='name' as={Link} to='/'>SETH MORENOS</Nav.Link>
                    <HeaderDropDown closeNav={this.collapseOnSelect}/>
                    <Nav.Link className='desktop_nav link' as={Link} to='/about'>ABOUT</Nav.Link>
                </Navbar>
            </div>
        );
    }
}
