import React from 'react';
import '../styles/Project.css';

import Banner from '../components/soulfx/soulfx-banner.svg';
import EnterpriseIA from '../components/soulfx/soulfx-enterprise_architecture.svg';
import EnterpriseWorkflow from '../components/soulfx/soulfx-enterprise_workflow.svg';
import Methodology from '../components/soulfx/soulfx-methodology.svg';
import PortalWorkflow from '../components/soulfx/soulfx-portal_workflow.svg';

export default function Soulfx() {

    return(
        <>
        <main className='project animated fadeIn'>
            <img className='project_banner' src={Banner} alt='soulfx patient support app' />
            <div className='project_body'>
                <h4><strong>OVERVIEW</strong></h4>
                <p>
                    Soulfx's Patient Support Application is a web-based platform designed for an external
                    client within the pharmaceutical industry. The application enables the remote 
                    delivery of a Patient Support Program (PSP), a service that provides financial
                    assistance for medical payments such as therapy and prescriptions.
                    <br />
                    <br />
                </p>
                <h4><strong>TEAM</strong></h4>
                <p>
                    Our project team consisted of a Project Manager (PM), another design co-op
                    and myself. We worked closely with our development team as well as our client
                    stakeholders in reviewing iterations for sitemaps and designs. Guidance was 
                    provided by our CEO throughout the duration of the project.
                    <br />
                    <br />
                    We carried out the end-to-end design of the product from inception to developer handoff.
                    My responsibilities included project scoping, information architecture (IA) mapping and prototyping.
                    <br />
                    <br />
                </p>
                <h4><strong>PROBLEM</strong></h4>
                <p>
                    The COVID-19 pandemic has and continues to drive heavy demand for services within the
                    healthcare sector. As immunocompromised individuals are among the most vulnerable to the
                    ongoing virus outbreak, calls have been made to minimize in-person interactions between frontline
                    workers and patients where possible. For our client, resulted in the need for the remote
                    delivery of their support services.
                    <br />
                    <br />
                    Thus, we were presented with an objective: design an online platform that will make the 
                    entirety of our client's support service accessible to patients via remote means.
                    <br />
                    <br />
                </p>
                <h4><strong>DESIGN PROCESS</strong></h4>
                <p>
                    The project lasted a duration of approximately 10 weeks. I worked with our PM in outlining
                    the scope of our design as well as the approach taken to develop it. Our patient support
                    application consists two components - a record management dashboard and a public-facing portal.
                    <br />
                    <img className='project_img' src={Methodology} alt='methodology' />
                    <br />
                </p>
                <h6><strong>USER RESEARCH</strong></h6>
                <p>
                    [outline user research, including user groups and methods]
                    <br />
                    <br />
                    [bolded points explaining different user objectives]
                    <br />
                    <br />
                </p>
                <h6><strong>INFORMATION ARCHITECTURE MAPPING</strong></h6>
                <p>
                    [explain purpose of ia and differences between dashboard and portal]
                    <br />
                    <img className='project_img' src={EnterpriseWorkflow} alt='record management workflow' />
                    <br />
                    [text explaining enterprise workflow and hierarchy of information]
                    <br />
                    <img className='project_img' src={EnterpriseIA} alt='record management architecture' />
                    <br />
                    [text explaining enterprise architecture flow and hierarchy]
                    <br />                    
                    <img className='project_img' src={PortalWorkflow} alt='program card retrieval workflow' />
                    <br />
                    [explain card retrieval workflow]
                    <br />
                    <br />
                </p>
                <h6><strong>PROTOTYPING</strong></h6>
                <p>
                    [design process section here]
                    <br />
                    <br />
                </p>
                <h6><strong>TESTING & FEEDBACK</strong></h6>
                <p>
                    [design process section here]
                    <br />
                    <br />
                </p>
                <h6><strong>ITERATIONS</strong></h6>
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
