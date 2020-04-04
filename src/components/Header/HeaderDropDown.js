import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    Link
} from 'react-router-dom';

import ResumeFile from '../pdf/sethvm_resume.pdf';

export default class HeaderDropDown extends React.Component {

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        setTimeout(() => {
            this.props.closeDropDown();
        }, 65);
    }

    render() {
        return (
            <>
            <Navbar.Toggle className='mobile_nav' aria-controls='navbarNav'
            ref={(node) => this.node = node}>
                <span>
                    <div className='menu_bar' />
                    <div className='menu_bar' />
                    <div className='menu_bar' />
                </span>
            </Navbar.Toggle>
            <Navbar.Collapse id='navbarNav'>
                <Nav className='nav_drop' onClick={(e) => this.handleClick}>
                    <Nav.Link className='nav_item' as={Link} to='/about'><strong>About</strong></Nav.Link>
                    <ExtLink href={ResumeFile} label='Resume' />
                    <ExtLink href='https://www.github.com/sethvm' label='GitHub' />
                    <ExtLink href='https://www.behance.net/sethvm/' label='Behance' />
                    <ExtLink href='https://www.linkedin.com/in/sethvm' label='Linkedin' />
                    <ExtLink href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca' label='Email' />
                </Nav>
            </Navbar.Collapse>
            </>
        );
    }
}

function ExtLink(props) {
    return (
        <Nav.Link className='nav_item' rel='noopener noreferrer' href={props.href} target='_blank'>
            <strong>{props.label}</strong>
        </Nav.Link>
    );
}
