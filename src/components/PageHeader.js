import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    Link
} from 'react-router-dom';
import HeaderDropDown from './HeaderDropDown';

import './bootstrap.min.css';
import './animate.min.css';
import './Header.css';
import './fonts/Futura PT_Light.css';
import './fonts/Futura PT_Book.css';
import './fonts/Futura_Demi.css';

export default class PageHeader extends React.Component {
    render() {
        return (
            <div className='header animated fadeIn'>
                <Navbar className='nav_banner' expand='1024px'>
                    <Nav.Link className='name' as={Link} to='/'>SETH MORENOS</Nav.Link>
                    <HeaderDropDown />
                </Navbar>
            </div>
        );
    }
}
