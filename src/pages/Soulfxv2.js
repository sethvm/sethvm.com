import React from 'react';
import '../styles/NewProject.css';

import Project from '../components/ProjectPage/Project';
import Section from '../components/ProjectPage/Section';
import SectionInner from '../components/ProjectPage/SectionInner';
import Paragraph from '../components/ProjectPage/Paragraph';

import Banner from '../components/ProjectPage/Banner';
import ImgContainer from '../components/ProjectPage/ImgContainer';
import ImgFluid from '../components/ProjectPage/ImgFluid';

import HTag2 from '../components/ProjectPage/HTag2';
import HTag4 from '../components/ProjectPage/HTag4';
import HTag5 from '../components/ProjectPage/HTag5';

import AddRecord from '../components/soulfx/soulfx-add_company.svg';
import AddRecord2 from '../components/soulfx/soulfx-add_company_2.svg';
import SoulfxBanner from '../components/soulfx/soulfx-banner.svg';
import SoulfxCard from '../components/soulfx/soulfx-card.svg';
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

export default function NewProject() {
    
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
                        <span className='bold'>Team:</span>&nbsp;
                        2 Designers (including myself), Project Manager (PM)
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Timeline:</span>&nbsp;
                        May 2020 - Aug 2020 (10 weeks)
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Tools:</span>&nbsp;
                        Adobe XD
                    </Paragraph>
                </Section>
                <Banner
                img={SoulfxCard}
                alt='Soulfx Patient Support App' />
                <Section>
                    <HTag4>An ongoing health crisis</HTag4>
                    <Paragraph>
                        COVID-19 has brought with it a large-scale challenge that
                        has overloaded services within the healthcare industry. Our
                        client has been prompted to move their financial aid service
                        online due to the risk imposed on immunocompromised individuals
                        by in-office consultation.
                    </Paragraph>
                </Section>
                <ImgContainer
                caption='Our approach'>
                    <SectionInner>
                        <HTag4>
                            How can we design a platform that will enable our client
                            to provide their support service to patients remotely?
                        </HTag4>
                    </SectionInner>
                    <ImgFluid>
                        <div>[ insert design process diagram ]</div>
                    </ImgFluid>
                </ImgContainer>
                <Section>
                    <HTag4>The support service in a nutshell</HTag4>
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
                    <HTag4>Uncovering a hierarchy</HTag4>
                    <Paragraph>
                        Talk about discovery and information architecture mapping
                    </Paragraph>
                </Section>
                <Section>
                    <HTag4>Jobs-to-be-done</HTag4>
                    <Paragraph>
                        We identified two user groups after obtaining an in-depth look at how
                        our client's service functions and outlined how each group's objective
                        with .
                    </Paragraph>
                </Section>
                <Section>
                    <HTag4>Laying out the groundwork</HTag4>
                    <Paragraph>
                        Talk about user flows for both user groups
                    </Paragraph>
                </Section>
                <Section>
                    <HTag4>Putting it all together</HTag4>
                    <Paragraph>
                        We carried out the product's end-to-end design from inception
                        to developer handoff. My responsibilities included information
                        architecture (IA) mapping, user flows and navigation; my fellow
                        co-op focused primarily on visual design and animations.
                    </Paragraph>
                    <Paragraph>
                        Our final design consists of two components - a <strong>record
                        management module</strong> paired with a <strong>public-facing portal</strong>
                    </Paragraph>
                </Section>
                <Section>
                    <HTag4>Key interactions</HTag4>
                    <Paragraph>
                        Talks about breadcrumbs + switches, and what pain points they address
                    </Paragraph>
                </Section>
                <Section>
                    <HTag4>The need for usability at scale</HTag4>
                    <Paragraph>
                        Upon a hypothetical return to this design, I would make a push to <strong>implement
                        a search and filter function</strong> into our dashboard lists.
                        As the number of registered records within the platform grows,
                        scrolling to find items within lists may become more laborious and yield a more cumbersome
                        navigation experience. The ability to search for and filter items would address such issues
                        by providing our caseworkers direct access to the records they need to work with.
                    </Paragraph>
                </Section>
                <Section>
                    <HTag4>
                        Our Takeaways
                        <br />
                    </HTag4>
                    <HTag5>
                        Designs are products of curiosity and collaboration
                    </HTag5>
                    <Paragraph>
                        A solid understanding of our client's service in conjunction with our users'
                        expectations with the product were critical to the execution of each design phase.
                        Working on this project taught me that effective designs are created by working
                        side-by-side with people who posses varying domains of knowledge, some of which
                        may not overlap.
                        <br />
                    </Paragraph>
                    <HTag5>
                        We as designers can help our frontliners, especially amid a pandemic
                    </HTag5>
                    <Paragraph>
                        Working on a platform for a patient support program has instilled in me a
                        new appreciation for how design can be used to make the world a better place.
                        While I do not have the resources nor the know-how to help patients with their
                        medical expenses, a critical objective of my role as a designer was to learn about
                        the people who do. The project provided an opportunity to leverage this understanding
                        to mitigate the increase in pressure brought to our client's caseworkers by the pandemic
                        and play a part in making healthcare services more accessible through design.
                    </Paragraph>
                </Section>
            </Project>
        </main>
    );
}
