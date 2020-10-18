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
                    delivery of their support services. Thus, we were presented witn an onjective:
                    <br />
                    <br />
                    <em><strong>Design an online platform that will make the entirety of our client's support service
                    accessible to patients via remote means.</strong></em>
                    <br />
                    <br />
                </p>
                <h4><strong>DESIGN PROCESS</strong></h4>
                <p>
                    The project lasted a duration of approximately 10 weeks. I worked with our PM in outlining
                    the scope of our design as well as the approach taken to develop it. Our patient support
                    application consists two components - a record management module paired with a public-facing portal.
                    <br />
                    <img className='project_img' src={Methodology} alt='methodology' />
                    <br />
                </p>
                <h5><strong>USER RESEARCH</strong></h5>
                <p>
                    Prior to beginning work with a design project, it is important to gain an understanding of the users
                    for which you will be creating said design for - this project was no exception. Upon working with our
                    client in conducting surveys, we identified two user groups, each with distinctly differing usage objectives
                    with the to-be application:
                    <br />
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Caseworkers</strong> are employed by our client. They provide important
                    information regarding the support program and work with each patient individually to determine an optimal support plan
                    based on their specific needs. Additionally, caseworkers are responsible for managing the records of companies, programs,
                    and pharmaceutical products registered under the program platform - through our application, they want a streamlined workflow
                    through which they can add, edit and remove records from the program.
                    <br />
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Patients</strong> registered under our client's support program receive certificates
                    which determine eligibility for certain program plans - these programs can be offered Canada-wide or exclusively to select provinces.
                    They can use these certificates to redeem program cards and in turn obtain discounts or financial assistance for applicable prescriptions
                    or therapy plans. A patient's usage goal with the application is much simpler compared to that of a caseworker - submit their certificate,
                    select a program, and receive their cards.
                    <br />
                    <br />Other key findings to note from learing more about our target users is the frequency at which each group will be using the
                    application as well as the hardware they will be using to access it. Caseworkers will be using the application module on a daily basis to
                    manage records via laptop computers or desktop workstations. On the other hand, program patients will only be accessing the application for
                    the purpose of obtaining their program cards; however, the range of devices that they will be accessing through can vary from desktops to
                    mobile phones.
                    <br />
                    <br />
                </p>
                <h5><strong>INFORMATION ARCHITECTURE MAPPING</strong></h5>
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
                <h5><strong>PROTOTYPING</strong></h5>
                <p>
                    [design process section here]
                    <br />
                    <br />
                </p>
                <h5><strong>TESTING & FEEDBACK</strong></h5>
                <p>
                    [design process section here]
                    <br />
                    <br />
                </p>
                <h5><strong>ITERATIONS</strong></h5>
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
