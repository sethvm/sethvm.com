import React from 'react';

/*layout imports*/
import Project from '../components/ProjectPage/Project';
import Section from '../components/ProjectPage/Section';
import SectionInner from '../components/ProjectPage/SectionInner';
import Indent from '../components/ProjectPage/Indent';
import IndentInner from '../components/ProjectPage/IndentInner';

/*image container imports*/
import Banner from '../components/ProjectPage/Banner';
import ImgContainer from '../components/ProjectPage/ImgContainer';
import ImgFluid from '../components/ProjectPage/ImgFluid';
import ImgCaption from '../components/ProjectPage/ImgCaption';

/*typography imports*/
import HTag2 from '../components/ProjectPage/HTag2';
import HTag3 from '../components/ProjectPage/HTag3';
import HTag4 from '../components/ProjectPage/HTag4';
import Paragraph from '../components/ProjectPage/Paragraph';

/*banner import*/
import SoulfxCard from '../components/soulfx/soulfx-card.svg';

/*old graphics - to be reworked*/
/*import AddRecord from '../components/soulfx/soulfx-add_company.svg';
import AddRecord2 from '../components/soulfx/soulfx-add_company_2.svg';
import SoulfxBanner from '../components/soulfx/soulfx-banner.svg';
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
import ProgramCards from '../components/soulfx/soulfx-program_cards.svg';*/

export default function Soulfx() {
    
    return(
        <main>
            <Project>
                <Section>
                    <HTag2>Patient Support App</HTag2>
                    <Paragraph>
                        Soulfx's Patient Support Application is a web-based
                        platform developed for an external client within the
                        pharmaceutical industry. It facilitates the remote delivery
                        of a service that provides financial assistance for medical
                        payments such as therapy and prescriptions.
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Company:</span>
                        &nbsp;Soulfx Technologies (client kept confidential as per NDA)
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Team:</span>
                        &nbsp;2 Designers (including myself), Project Manager (PM)
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Timeline:</span>
                        &nbsp;May 2020 - Aug 2020 (10 weeks)
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Tools:</span>
                        &nbsp;Adobe XD
                    </Paragraph>
                </Section>

                <Banner
                img={SoulfxCard}
                alt='Soulfx Patient Support App' />

                <Section>
                    <HTag3>An ongoing health crisis</HTag3>
                    <Paragraph>
                        COVID-19 has brought with it a large-scale challenge that
                        has overloaded services within the healthcare industry. Our
                        client has been prompted to move their financial aid service
                        online due to the risk imposed on immunocompromised individuals
                        by in-office consultation.
                    </Paragraph>
                </Section>

                <Indent>
                    <HTag4>
                        How can we design a platform that will enable our client
                        to provide their support service to patients remotely?
                    </HTag4>
                </Indent>

                <ImgContainer>
                    <ImgFluid>
                        <div>[ insert design process diagram ]</div>
                    </ImgFluid>
                    <ImgCaption>
                        Our approach
                    </ImgCaption>
                </ImgContainer>

                <Section>
                    <HTag3>The support service in a nutshell</HTag3>
                    <Paragraph>
                        Our client's support service aims to make prescription repayment
                        easier for patients by providing reimbursements or discounts to
                        select pharmaceutical products. Each participaing manufacturer offers
                        their own selection of program plans and provides prescription cards
                        for select products that can be redeemed by patients. These programs
                        can be restricted to specified provinces or offered Canada-wide.
                    </Paragraph>
                </Section>

                <Section>
                    <HTag3>Decoding a hierarchy</HTag3>
                    <Paragraph>
                        Talk about discovery and information architecture mapping
                    </Paragraph>
                </Section>

                <Section>
                    <HTag3>Jobs-to-be-done</HTag3>
                    <Paragraph>
                        We identified two user groups after obtaining an in-depth look at how
                        our client's service functions and outlined how each group's objective
                        with .
                    </Paragraph>
                </Section>

                <Section>
                    <HTag3>Laying out the groundwork</HTag3>
                    <Paragraph>
                        Talk about user flows for both user groups
                    </Paragraph>
                </Section>

                <Section>
                    <HTag3>Putting it all together</HTag3>
                    <Paragraph>
                        We carried out the product's end-to-end design from inception
                        to developer handoff. My responsibilities included information
                        architecture (IA) mapping, user flows and navigation; my fellow
                        co-op focused primarily on visual design and animations.
                    </Paragraph>
                </Section>

                <ImgContainer>
                    <SectionInner>
                        <HTag4>
                            Record Management Dashboard
                        </HTag4>
                        <Paragraph>
                            While designing the record management dashboard, we focused
                            on enabling our caseworkers to skim through record lists and details
                            as quickly as possible. Thus, we elected to employ a single-column approach.
                        </Paragraph>
                    </SectionInner>
                    <ImgFluid>
                        <div>[ dashboard screens ]</div>
                    </ImgFluid>
                    <ImgCaption>
                        image caption goes here
                    </ImgCaption>
                    <SectionInner>
                        <HTag4>
                            Card Retrieval Portal
                        </HTag4>
                        <Paragraph>
                            We aimed to make the card retrieval process as seamless as possible for
                            both new and returning users. Additionally, we wanted the interface to be
                            easy to navigate through using touch inputs, as our patients will have access
                            to the platform through mobile devices.
                        </Paragraph>
                    </SectionInner>
                    <ImgFluid>
                        <div>[ portal screens ]</div>
                    </ImgFluid>
                    <ImgCaption>
                        image caption goes here
                    </ImgCaption>
                </ImgContainer>

                <Section>
                    <HTag3>Key interactions</HTag3>
                    <Paragraph>
                        Talks about breadcrumbs + switches, and what pain points they address
                    </Paragraph>
                </Section>

                <Section>
                    <HTag3>
                        Takeaways and opportunities for refinement
                        <br />
                    </HTag3>
                    <IndentInner>
                        <HTag4>
                            Designs are products of curiosity and collaboration
                        </HTag4>
                    </IndentInner>
                    <Paragraph>
                        <br />
                        A solid understanding of our client's service in conjunction with our users'
                        expectations with the product were critical to the execution of each design phase.
                        Working on this project taught me that effective designs are created by working
                        side-by-side with people who posses varying domains of knowledge, some of which
                        may not overlap.
                        <br />
                    </Paragraph>
                    <IndentInner>
                        <HTag4>
                            We as designers can contribute to essential industries, even amid a pandemic
                        </HTag4>
                    </IndentInner>
                    <Paragraph>
                        <br />
                        I do not have the resources nor the know-how to help patients with their
                        medical expenses, but a critical objective of my role as a designer was to learn about
                        the people who do. The project provided an opportunity to leverage this understanding
                        to mitigate the increase in pressure brought to our client's caseworkers by the pandemic
                        and play a part in making healthcare services more accessible through design.
                        <br />
                    </Paragraph>
                    <IndentInner>
                        <HTag4>
                            Upon a hypothetical return to this project, I would aim to further streamline
                            the navigation experience for our record management dashboard
                        </HTag4>
                    </IndentInner>
                    <Paragraph>
                        <br />
                        Features I would look to explore include <strong>search and filter functions.
                        </strong> As the number of registered records within the platform grows,
                        scrolling to find items within lists may become more laborious.
                        The ability to search for and filter items would address such issues
                        by providing our caseworkers direct access to the records they need
                        to work with.
                    </Paragraph>
                </Section>
            </Project>
        </main>
    );
}
