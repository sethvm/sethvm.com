import React from 'react';
import '../styles/Project.css';

import Banner from '../components/soulfx/soulfx-banner.svg';

export default function Soulfx() {

    return(
        <>
        <main className='project animated fadeIn'>
            <img className='project_banner' src={Banner} alt='soulfx patient support app' />
            <div className='project_body'>
                <h4><strong>OVERVIEW</strong></h4>
                <p>
                    Soulfx's Patient Support Application is a web-based platform designed for an external
                    client within the pharmaceutical industry. The application aims to enable the remote 
                    delivery of a Patient Support Program (PSP), a service that provides financial
                    assistance for patients in need.
                    <br />
                    <br />
                </p>
                <h4><strong>TEAM</strong></h4>
                <p>
                    Our project team consisted of a Project Manager (PM), another design co-op
                    and myself. We worked closely with our development team as well as our client
                    stakeholders in reviewing designs and iterations. Guidance was provided by our
                    CEO throughout the duration of the project.
                    <br />
                    <br />
                    My responsibilities encompassed an aspect from every phase of the application's
                    development process, including project scoping, design and preparing specifications
                    for development handoff.
                    <br />
                    <br />
                </p>
                <h4><strong>PROBLEM</strong></h4>
                <p>
                    [state design problem here]
                    <br />
                    <br />
                </p>
                <h4><strong>DESIGN PROCESS</strong></h4>
                <p>
                    [design process section here]
                    <br />
                    <br />
                </p>
                <h4><strong>TAKEAWAYS</strong></h4>
                <p>
                    [takeaway section here]
                </p>
            </div> {/* /project-body */}
        </main> {/* /project */}
        </>
    );
}
