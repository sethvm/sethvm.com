import React from 'react';
import '../styles/Project.css';

import AddRecord from '../components/soulfx/soulfx-add_company.svg';
import AddRecord2 from '../components/soulfx/soulfx-add_company_2.svg';
import Banner from '../components/soulfx/soulfx-banner.svg';
import CertListAnnotated from '../components/soulfx/soulfx-cert_list_annotated.svg';
import CertActivation from '../components/soulfx/soulfx-cert_list_popup.svg';
import CompanyDetails from '../components/soulfx/soulfx-company_details.svg';
import EnterpriseIA from '../components/soulfx/soulfx-enterprise_architecture.svg';
import EnterpriseWorkflow from '../components/soulfx/soulfx-enterprise_workflow.svg';
import ListView from '../components/soulfx/soulfx-list_view.svg';
import Methodology from '../components/soulfx/soulfx-methodology.svg';
import PortalWorkflow from '../components/soulfx/soulfx-portal_workflow.svg';
import ProgramDetails from '../components/soulfx/soulfx-program_details.svg';
import ProgramSelection from '../components/soulfx/soulfx-program_selection.svg';
import ProgramCards from '../components/soulfx/soulfx-program_cards.svg';

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
                    and myself (designer). We worked closely with our development team as well as our client
                    stakeholders in reviewing iterations for sitemaps and designs. Guidance was 
                    provided by our CEO throughout the duration of the project.
                    <br />
                    <br />
                    We carried out the end-to-end design of the product from inception to developer handoff.
                    My responsibilities included project scoping, information architecture (IA) mapping and prototyping.
                    <br />
                    <br />
                </p>
                <h4><strong>TIMELINE</strong></h4>
                <p>
                    May 2020 - August 2020
                    <br />
                    <br />
                </p>
                <h4><strong>PROBLEM</strong></h4>
                <p>
                    The COVID-19 pandemic has and continues to drive heavy demand for services within the
                    healthcare sector. As immunocompromised individuals are among the most vulnerable to the
                    ongoing virus outbreak, calls have been made to minimize in-person interactions between frontline
                    workers and patients where possible. For our client, this resulted in the need for the remote
                    delivery of their support services.
                    <br />
                    <br />
                </p>
                <h4><strong>OBJECTIVE</strong></h4>
                <p>
                    <em><strong>
                        Design an online platform that will enable the remote delivery of our client's patient support
                        program. 
                    </strong></em>
                    <br />
                    <br />
                </p>
                <h4><strong>DESIGN PROCESS</strong></h4>
                <p>
                    The project lasted a duration of approximately 10 weeks. I worked with our PM in outlining
                    the scope of our design as well as the approach taken to develop it.
                    <br />
                    <br />
                    Our patient support application consists two components - a <strong>record management module</strong> paired 
                    with a <strong>public-facing portal</strong>.
                    <br />
                    <img className='project_img' src={Methodology} alt='methodology' />
                    <br />
                </p>
                <h5><strong>USER RESEARCH</strong></h5>
                <p>
                    Prior to beginning work with a design project, it is important to gain an understanding of the users
                    for which you will be creating said design for. Upon working with our client in conducting surveys, we 
                    identified two user groups, each with distinctly differing usage objectives with the to-be application:
                    <br />
                    <br />
                    <div className='indented'> 
                        <strong>Caseworkers</strong> are employed by our client, and will be the user group utilizing our record management module.
                        They provide important information regarding the support program and work with each patient individually to determine an optimal support plan
                        based on their specific needs. Additionally, caseworkers are responsible for managing the records of companies, programs, program certificates
                        and pharmaceutical products registered under the program platform - through our application, they want a streamlined workflow
                        through which they can add, edit and remove records from the program.
                    </div>
                    <br />
                    <div className='indented'>
                        <strong>Patients</strong> will be using the public-facing portal. Upon registration under our client's support platform, patients receive
                        certificates which determine eligibility for certain program plans - these can be offered Canada-wide or exclusively to select provinces.
                        They can use these certificates to redeem program cards and in turn obtain discounts or financial assistance for applicable prescriptions
                        or therapy plans. A patient's usage goal with the application is much simpler compared to that of a caseworker - submit their certificate,
                        select a program, and receive their cards.
                    </div>
                    <br />
                    Other key findings to note from surveying our target users is the frequency at which each group will be using the
                    application as well as the hardware they will be using to access it. Caseworkers will be using the application module on a daily basis to
                    manage records via laptop computers or desktop workstations. On the other hand, program patients will only be accessing the application for
                    the purpose of obtaining their program cards; however, the range of devices that they will be accessing through can vary from desktops to
                    mobile phones.
                    <br />
                    <br />
                </p>
                <h5><strong>INFORMATION ARCHITECTURE (IA) MAPPING</strong></h5>
                <p>
                    After learning about our target users and their intentions with the usage of the support application, we sought to learn more about
                    how the support program itself works and how information is organized within it.
                    <br />
                    <br />
                    <img className='project_img' src={EnterpriseWorkflow} alt='record management workflow' />
                    <br />
                    <br />
                    Each company registered under the program offers its own set of program plans, and each program is applicable to select certificates and offers its own set of eligible
                    pharmaceutical products.
                    <br />
                    <br />
                    We created workflows and IA diagrams for the record management dashboard to model this hierarchy - in turn, presenting 
                    to our project stakeholders and development team how navigation would flow throughout the application became a (relatively) streamlined process.
                    <br />
                    <img className='project_img' src={EnterpriseIA} alt='record management architecture' />
                    <br />
                    As my fellow design co-op and I had a fairly short timeframe to develop an understanding for how our client's patient support program worked,
                    mapping out an IA diagram for the record management dashboard served as a useful reference during the creation of our interface prototypes. It
                    enabled us to keep track of which details are associated with each record when creating each screen.
                    <br />
                    <br />
                    <img className='project_img' src={PortalWorkflow} alt='program card retrieval workflow' />
                    <br />
                    <br />
                    Program plans offered through national-level certificates are accessible to patients regardless of province, unlike those offered at the provincial level.
                    Moreover, the availability of certain cards offered by programs continuously fluctuate over time based on demand. These considerations were crucial factors
                    for how we decided to map out the workflow for our public-facing portal.
                    <br />
                    <br />
                    The challenge we faced in creating a design for the certificate retrieval stemmed from the low usage frequency - we were prompted to
                    find a balance between providing guidance for patients new to the platform and minimizing disruptive "hand-holding" for returning patients as
                    they go to redeem their program cards.
                    <br />
                    <br />
                </p>
                <h5><strong>PROTOTYPING</strong></h5>
                <p>
                    We elected to employ a single-column approach for both platform components. Our intention for the record management dashboard is to allow caseworkers
                    to skim through lists and details as quickly as possible when working with records and facilitate responsiveness for the public-facing portal.
                    The visual layouts for lists, record addition flow and detail pages are kept consistent across all tiers of information.
                    <div className='project_img_caption'>
                        <p>
                            <br/>
                            <br/>
                            <em><strong>Record Management - List View</strong></em>
                            <br/>
                        </p>
                    </div>
                    <img className='project_img' src={ListView} alt='company list view' />
                    <br />
                </p>
            </div> {/* /project-body */}
            <div className='project_img_caption'>
                <p>
                    <br/>
                    <em><strong>Record Management - Record Addition</strong></em>
                    <br/>
                </p>
            </div> {/* /caption */}
            <div className='img-section'>
                <img className='img-fluid_card' src={AddRecord} alt='record addition form'/>
                <br />
                <br />
                <img className='img-fluid_card' src={AddRecord2} alt='record addition confirmation'/>
            </div> {/* /img section */}
            <div className='project_img_caption'>
                <p>
                    <br/>                    
                    <br/>                    
                    <br/>                    
                    <em><strong>Record Management - Detail Pages</strong></em>
                    <br/>
                </p>
            </div> {/* /caption */}
            <div className='img-section'>
                <img className='img-fluid_card' src={CompanyDetails} alt='company details'/>
                <br />
                <br />
                <img className='img-fluid_card' src={ProgramDetails} alt='program details'/>
                <br />
            </div> {/* /img section */}
            <div className='project_body'>
                <p>
                    We aimed to make the card retrieval process as seamless of an experience as possible for both new and returning users.
                    The portal interface automatically accounts for the selected province by filtering out all unavailable programs from the
                    selection list. Through the layout style we have opted to use, we intended to create a straightforward flow that is easy 
                    for new patients to follow as well as an interface that is easy to scroll through using touch inputs.
                </p>
            </div> {/* /section break */}
            <div className='project_img_caption'>
                <p>
                    <em><strong>Public-facing Portal - Program Card Retrieval</strong></em>
                    <br/>
                </p>
            </div> {/* /caption */}
            <div className='img-section'>
                <img className='img-fluid_card' src={ProgramSelection} alt='program selection'/>
                <br />
                <br />
                <img className='img-fluid_card' src={ProgramCards} alt='program cards'/>
            </div> {/* /img section */}
            <div className='project_body'>
                <h5><strong>USER TESTING</strong></h5>
                <p>
                    Our record management dashboard and portal yielded two different success criteria:
                    <br />
                    <br />
                    <div className='indented'>
                        The record management dashboard must enable caseworkers to manage records for
                        companies, programs offered by each company and products registered under the platform. We defined "manage" as
                        the ability to add a new record, delete a record and edit details associated with each record.
                    </div>
                    <br />
                    <div className='indented'>
                        Patients must be able to retrieve (download) their program cards,
                        regardless of the type of certificate they have (i.e. provincial or national level) through our public-facing portal.
                    </div>
                    <br />
                    Due to the quantitative nature of these measures, we made use of feedback received from user testing to identify
                    pain points present within our designs. We had caseworkers add, delete and edit details for one record of each type
                    (company, program, and product), and patients who volunteered to partake in testing were prompted to submit a dummy
                    certificate and retrieve a program card. Pivotal pain points we found via user testing included the following:
                    <br />
                    <br />
                    <div className='indented'>
                        While caseworkers found the downward move in hierarchy to be straightforward when navigating through records, moving upwards from the bottom 
                        (e.g. attempting to edit a company's details after changing a product detail) was deemed tedious, often calling for the need to 
                        "spam the 'Back' button."
                    </div>
                    <br />
                    <div className='indented'>
                        Having to deactivate multiple provincial certificates for programs that make the switch to the national level was a repetitive process,
                        with caseworkers having to move to and from each individual certificate page.
                    </div>
                    <br />
                </p>
                <h5><strong>ITERATIONS & IDEAS</strong></h5>
                <p>
                    Iterations made to our designs were driven by the feedback we obtained from user testing.
                    Key features within our record management dashboard were implemented to address the pain points we discovered:
                    <br />
                </p>
            </div>
                <div className='img-section'>
                    <img className='img-fluid_card' src={CertListAnnotated} alt='annotated certificate list' />
                    <br />
                    <br />
                    <img className='img-fluid_card' src={CertActivation} alt='certificate activation'/>
                </div> {/* /img section */}
            <div className='project_body'>
                <p>
                    <div className='indented'>
                        <strong>1) Breadcrumbs</strong> provide a navigation "trail" for the caseworker as they navigate through the record information
                        hierarchy. They streamline access to higher-level categories by drastically reducing the number of actions required to reach any
                        level from the lowest tier of information.
                        <br />
                        <br />
                        <strong>2) Certificate Activation Switches</strong> facilitate the activation or deactivation of provincial-level certificates
                        without the need to navigate into each individual certificate's page. This reduces the time taken to carry out multiple activations
                        or deactivations.
                        <br />
                        <br />
                        <strong>3)</strong> The <strong>National Activation Switch</strong> is reserved for the usage case where a company opts to make the switch from offering
                        provincial certificates to national level certificates. Upon activating the national-level certificate, it automatically prompts the dashboard
                        to ensure the deactivation of all active provincial certificates. A confirmation pop-up is displayed when transitioning between national and provincial
                        activations to prevent accidental switches.
                    </div>
                    <br />
                    Had we had more time to iterate upon our design, I would have made a push to include a <strong>search and filtering function</strong> into our list screens.
                    As the number of registered records within the platform grows, querying items within lists may gradually become more laborious and make the overall experience of
                    using the record management dashboard feel increasingly cumbersome. The inclusion of a search function would address such issues by providing caseworkers direct
                    access to the records that they need to work with.
                    <br />
                    <br />
                </p>
                <h4><strong>TAKEAWAYS</strong></h4>
                <p>
                    <br />
                    <div className='indented'>
                        <em><strong>DESIGNS ARE PRODUCTS OF CURIOSITY AND COLLABORATION</strong></em>
                        <br />
                        A solid understanding of how our client's patient support program works in conjunction with what our target users expect out of 
                        the to-be product were critical to the execution of each design phase. This project reminded me that effective designs are
                        created through asking questions and working side-by-side with people who posses varying domains of knowledge, some of which
                        may not overlap.
                        <br />
                        <br />
                        <em><strong>SERVING HEALTHCARE CONSUMERS THROUGH DESIGN</strong></em>
                        <br />
                        Designing a platform for a patient support program has driven me to be more reflective of the impact left by my work on others.
                        While I do not have the resources nor the know-how needed to help patients with their therapy or prescription expenses, I had
                        the privilege of creating and providing a tool for people who do.
                    </div>
                </p>
            </div> {/* /project-body */}
        </main> {/* /project */}
        </>
    );
}
