import React from 'react';
import '../styles/Home.css';

export default function Home() {
    
    return (
        <main>
            <div className='intro_sm animated fadeIn'>
                <h1><strong>DESIGNER</strong></h1>
                <h6><strong>ENGINEERING STUDENT</strong></h6>
                <h6><strong>UNIVERSITY OF WATERLOO</strong></h6>
            </div> {/* /intro-sm */}
            <div className='intro_md animated fadeIn'>
                <h1><strong>Hello! I'm Seth.</strong></h1>
                <p>
                    <br />Thanks for stopping by!
                    <br />
                    <br />I'm a <strong>designer</strong> pursuing a BASc. in
                    <br /><strong>Systems Design Engineering</strong> with a passion for
                    <br />creating products that help move the world forward.
                </p>
            </div> {/* /intro-md */}
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
                    <br />passion for creating products that
                    <br />help move the world forward.
                    <br />
                    <br />My previous experience includes...
                    <br />
                    <br /><strong>Software Design</strong> @ Soulfx Technologies
                    <br /><strong>UX and Web Design</strong> @ Ontario Public Service
                </p>
            </div> {/* /intro-lg */}
        </main>
    );
}
