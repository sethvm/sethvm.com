import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
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
        <main className='project animate__animated animate__fadeIn'>
            <img className='project_banner' src={Banner} alt='soulfx patient support app' />
            <div className='project_body'>
                <h4><strong>OVERVIEW</strong></h4>
                <p>
                    Soulfx's Patient Support Application is a web-based platform developed for an external
                    client within the pharmaceutical industry. The application enables the remote 
                    delivery of a Patient Support Program (PSP), a service that provides financial
                    assistance for medical payments such as therapy and prescriptions.
                    <br />
                    <br />
                </p>
                <h4><strong>TEAM</strong></h4>
                <p>
                    Soulfx Technologies is a Mississauga-based software consulting firm specializing in
                    healthcare applications.
                    <br />
                    <br />
                    Our project team consisted of a Project Manager (PM), another design co-op
                    and myself (designer). We worked closely with our development team as well as our client
                    stakeholders in reviewing iterations for sitemaps and designs. Guidance was 
                    provided by our CEO throughout the duration of the project.
                    <br />
                    <br />
                    We carried out the end-to-end design of the product from inception to developer handoff.
                    My responsibilities included conducting generative research, information architecture (IA) mapping and prototyping.
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
                    workers and patients where possible. For our client, this resulted in the need to move the delivery
                    of their support services to online platforms.
                    <br />
                    <br />
                    <Jumbotron className='highlight'>
                        <strong>How can we design an online platform that will enable the remote delivery of one our client's patient support
                        programs?</strong>
                    </Jumbotron>
                    <br />
                </p>
                <h4><strong>DESIGN PROCESS</strong></h4>
                <p>
                    The project lasted a duration of approximately 10 weeks. I worked with our PM in outlining
                    the scope of our design as well as the approach taken to develop it. Earlier phases of the project focused
                    on learning about the patient support program and the user groups we were to be designing for, while later phases
                    shift towards creating and iterating upon prototypes of our product.
                    <br />
                    <br />
                    <Jumbotron className='highlight'>
                        Our final design is an application consisting of two components - a <strong>record management module</strong> paired 
                        with a <strong>public-facing portal</strong>.
                    </Jumbotron>
                    <div className='project_img_caption'>
                        <p>
                            <em><strong>Our design approach</strong></em>
                        </p>
                    </div>
                    <img className='project_img' src={Methodology} alt='methodology' />
                    <br />
                    <br />
                </p>
                <h5><strong>MEETING OUR AUDIENCE</strong></h5>
                <p>
                    Prior to beginning work with a design project, it is important to gain an understanding of the users
                    for whom we will be creating said design for. Upon working with our client in conducting surveys, we 
                    identified two user groups, each with distinctly differing usage objectives with the to-be application:
                    <br />
                    <br />
                    <Jumbotron className='highlight'>
                        <strong>Caseworkers</strong> are employed by our client and will be the user group utilizing our record management module.
                        They provide important information regarding the support program and work with each patient individually to determine an optimal support plan
                        based on their specific needs. Additionally, caseworkers are <strong>responsible for managing the records of companies, programs, program certificates
                        and pharmaceutical products registered under the program platform</strong> - a task that they seek to be able to do using our application.
                    </Jumbotron>
                    <Jumbotron className='highlight'>
                        <strong>Patients</strong> will be using the public-facing portal. Upon registration under our client's support platform, patients receive
                        certificates which determine eligibility for certain program plans - these can be offered Canada-wide or exclusively to select provinces.
                        They can use these certificates to redeem program cards and in turn obtain discounts or financial assistance for applicable prescriptions
                        or therapy plans. A patient's usage goal with the application is much simpler compared to that of a caseworker- <strong>receive their program
                        cards</strong> after submitting their certificates.
                    </Jumbotron>
                    Other key findings to note from surveying our target users is the frequency at which each group will be using the
                    application as well as the hardware they will be using to access it. Caseworkers will be using the application module on a daily basis to
                    manage records via laptop computers or desktop workstations. On the other hand, program patients will only be accessing the application for
                    the purpose of obtaining their program cards; however, the range of devices that they will be accessing through can vary from desktops to
                    mobile phones.
                    <br />
                    <br />
                    <br />
                </p>
                <h5><strong>UNDERSTANDING OUR CLIENT'S PLATFORM</strong></h5>
                <p>
                    After learning about our target users and how they interact with the service, we sought to get an in-depth look 
                    into how the support program itself works and how information is organized within it.
                    <br />
                    <br />
                    <br />
                    <div className='project_img_caption'>
                        <p>
                            <em><strong>Record Management Workflow</strong></em>
                        </p>
                    </div>
                    <img className='project_img' src={EnterpriseWorkflow} alt='record management workflow' />
                    <br />
                    <br />
                    <Jumbotron className='highlight'>
                        Each company registered under the program offers its own set of program plans - each program in turn is applicable to select certificates
                        and offers its own collection of eligible pharmaceutical products.
                    </Jumbotron>
                    We created workflows and IA diagrams for the record management dashboard to model this hierarchy - in turn, presenting 
                    to our project stakeholders and development team how navigation would flow throughout the application became a (relatively) streamlined process.
                    <br />
                    <br />
                    <br />
                    <div className='project_img_caption'>
                        <p>
                            <em><strong>Record Management Dashboard IA</strong></em>
                        </p>
                    </div>
                    <img className='project_img' src={EnterpriseIA} alt='record management architecture' />
                    <br />
                    <br />
                    As my fellow design co-op and I had a fairly short timeframe to develop an understanding for how our client's patient support program worked,
                    mapping out an IA diagram for the record management dashboard served as a useful reference during the creation of our interface prototypes. It
                    enabled us to keep track of which details are associated with each record when creating each screen.
                    <br />
                    <br />
                    <br />
                    <div className='project_img_caption'>
                        <p>
                            <em><strong>Program Card Retrieval Workflow</strong></em>
                        </p>
                    </div>
                    <img className='project_img' src={PortalWorkflow} alt='program card retrieval workflow' />
                    <br />
                    <br />
                    <Jumbotron className='highlight'>
                        Program plans offered through national-level certificates are accessible to patients regardless of province, unlike those offered at the provincial level.
                        Moreover, the availability of certain cards offered by programs continuously fluctuate over time based on demand. These considerations were crucial factors
                        for how we decided to map out the workflow for our public-facing portal.
                    </Jumbotron>
                    The challenge we faced in creating a design for the certificate retrieval stemmed from the low usage frequency - we were prompted to
                    find a balance between providing guidance for patients new to the platform and minimizing disruptive "hand-holding" for returning patients as
                    they go to redeem their program cards.
                    <br />
                    <br />
                    <br />
                </p>
                <h5><strong>THE DESIGNED SOLUTION</strong></h5>
                <p>
                    We elected to employ a single-column approach for both platform components. Our intention for the record management dashboard is to allow caseworkers
                    to skim through lists and details as quickly as possible when working with records and facilitate responsiveness for the public-facing portal.
                    The visual layouts for lists, record addition flow and detail pages are kept consistent across all tiers of information.
                    <br/>
                    <br/>
                    <div className='project_img_caption'>
                        <p>
                            <em><strong>Record List View</strong></em>
                        </p>
                    </div>
                    <img className='project_img' src={ListView} alt='company list view' />
                    <br />
                </p>
            </div> {/* /project-body */}
            <div className='project_img_caption'>
                <p>
                    <br/>
                    <em><strong>Record Addition</strong></em>
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
                    <em><strong>Record Detail Pages</strong></em>
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
            </div>
            <div className='project_img_caption'>
                <p>
                    <em><strong>Program Card Retrieval</strong></em>
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
                <p>
                    <br />
                </p>
                <h5><strong>VALIDATING OUR DESIGN</strong></h5>
                <p>
                    Our record management dashboard and portal yielded <strong>two different success criteria</strong>:
                    <br />
                    <br />
                    <Jumbotron className='highlight'>
                        The record management dashboard must enable caseworkers to manage records for
                        companies, programs offered by each company and products registered under the platform. We defined "manage" as
                        the <strong>ability to add a new record, delete a record and edit details associated with each record</strong>.
                    </Jumbotron>
                    <Jumbotron className='highlight'>
                        Patients must be able to walk through the entire program card retrieval process via our public-facing portal - in
                        other words, a patient must be able to <strong>submit a certificate (national or provincial), select a desired program and retrieve the
                        respective program card</strong>.
                    </Jumbotron>
                    Due to the qualitative nature of these measures, we made use of feedback received from usability testing to <strong>identify
                    pain points present within our designs</strong>. We had caseworkers add, delete and edit details for one record of each type
                    (company, program, product and certificate), and patients who volunteered to partake in testing were prompted to submit a dummy
                    certificate and retrieve a program card. Pivotal pain points we found via usability testing included the following:
                    <br />
                    <br />
                    <Jumbotron className='highlight'>
                        While caseworkers found the downward move in hierarchy to be straightforward when navigating through records, <strong>moving upwards from the
                        lowest tier of information was deemed tedious</strong> (e.g. attempting to edit a company's details after changing a product detail), often
                        calling for the need to "spam the 'Back' button."
                    </Jumbotron>
                    <Jumbotron className='highlight'>
                        <strong>Deactivating multiple provincial certificates for programs was found to be a repetitive process</strong> - caseworkers had to move to and from each
                        individual certificate page to perform each deactivation manually in the event that a program opted to make the switch from provincial
                        certificates to a national-level certificate.
                    </Jumbotron>
                    <br />
                </p>
                <h5><strong>REFINING OUR SOLUTION</strong></h5>
                <p>
                    Iterations made to our designs were <strong>driven by the feedback we obtained</strong> from usability testing.
                    <br />
                    <br />
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
                    <Jumbotron className='highlight'>
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
                        provincial certificates to national-level certificates. Upon activating the national-level certificate, it automatically prompts the dashboard
                        to ensure the deactivation of all active provincial certificates. A confirmation pop-up is displayed when transitioning between national and provincial
                        activations to prevent accidental switches.
                    </Jumbotron>
                    Had we had more time to iterate upon our design, I would have made a push to <strong>implement a search and filtering function</strong> into each of our list screens.
                    As the number of registered records within the platform grows, querying items within lists may gradually become more laborious and make the overall experience of
                    navigating through the record management dashboard feel increasingly cumbersome. The inclusion of a search function would address such issues by providing caseworkers direct
                    access to the records that they need to work with.
                    <br />
                    <br />
                    <br />
                </p>
                <h4><strong>TAKEAWAYS</strong></h4>
                <p>
                    <br />
                    <strong>Designs are products of curiosity and collaboration</strong> - a solid understanding of how our client's patient support
                    program works in conjunction with what our target users expect out of the to-be product were critical to the execution of each design phase.
                    This project reminded me that effective designs are created through asking questions and working side-by-side with people who posses 
                    varying domains of knowledge, some of which may not overlap.
                    <br />
                    <br />
                    Designing a platform for a patient support program has driven me to be more reflective of the impact left by my work on others.
                    While I do not have the resources nor the know-how needed to help patients with their therapy or prescription expenses, I had
                    the privilege of creating and providing a tool for people who do, and in turn <strong>serving healthcare consumers through
                    design</strong>.
                </p>
            </div> {/* /project-body */}
        </main> {/* /project */}
        </>
    );
}
