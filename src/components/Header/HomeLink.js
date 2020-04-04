import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function HomeLink() {
    return (
        <Nav.Link className='name link' as={Link} to='/'>
            SETH MORENOS
        </Nav.Link>
    );
}
