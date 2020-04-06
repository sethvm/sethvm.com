import React from 'react';

import './Home.css';
import './fonts/Futura PT_Light.css';
import './fonts/Futura PT_Book.css';
import './fonts/Futura_Demi.css';

export default function Home() {
    return (
        <>
        <div className='intro_sm animated fadeIn'>
            <h1><strong>DESIGNER</strong></h1>
            <h6><strong>ENGINEERING STUDENT</strong></h6>
            <h6><strong>UNIVERSITY OF WATERLOO</strong></h6>
        </div>
        <div className='intro_md animated fadeIn'>
            <h1><strong>Hello! I'm Seth.</strong></h1>
            <p>
                <br />Thanks for stopping by!
                <br />
                <br />I'm a <strong>designer</strong> pursuing a BASc. in&nbsp;
                <strong>Systems Design Engineering</strong>
                <br />with a passion for creating products that leave a positive impact
                <br />in the world around me.
            </p>
        </div>
        <div className='intro_lg animated fadeIn'>
            <h1>
                <strong>Hello! I'm Seth.</strong>
                <br />
            </h1>
            <p> 
                <br />Thanks for stopping by!
                <br />
                <br />I'm a <strong>designer</strong> pursuing a BASc. in
                <br /><strong>Systems Design Engineering</strong> with a
                <br />passion for creating products that leave
                <br />a positive impact in the world around me.
                <br />
                <br />Experienced in <strong>UI/UX design</strong> and
                <br />learning <strong>front-end development</strong>.
                <br />
                <br />Previously a <strong>UX and Web Designer</strong>
                <br />at the <strong>Ontario Public Service</strong>.
            </p>
        </div>
        </>
    );
}
