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
                        pharmaceutical industry. It facilitates the
                        remote delivery of a Patient Support Program (PSP), a
                        service that provides financial assistance for medical
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
                        (referred to as a patient support service or PSP) online due
                        to the risk imposed to immunocompromised individuals by
                        in-office consultation.
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
                    <HTag4>Our client's service</HTag4>
                    <Paragraph>
                        Our client's support program serves to make prescription repayment
                        easier for patients by providing reimbursements or discounts to
                        select pharmaceutical products.
                    </Paragraph>
                </Section>
                <Section>
                    <HTag4>Jobs-to-be-done</HTag4>
                    <Paragraph>
                        We identified two user groups after obtaining an in-depth look at how
                        our client's service functions
                    </Paragraph>
                </Section>
                <Section>
                    <HTag4>Laying out the groundwork</HTag4>
                    <Paragraph>
                        Lorem Ipsum dolor sit amet
                    </Paragraph>
                </Section>
                <Section>
                    <HTag4>Putting it all together</HTag4>
                    <Paragraph>
                        We carried out the product's end-to-end design, from inception
                        to developer handoff. My responsibilities included conducting
                        generative research, information architecture (IA) and prototyping.
                    </Paragraph>
                </Section>
                <Section>
                    <HTag4>Validating our design</HTag4>
                    <Paragraph>
                        Lorem Ipsum dolor sit amet
                    </Paragraph>
                </Section>
                <Section>
                    <HTag4>Refining our solution</HTag4>
                    <Paragraph>
                        Lorem Ipsum dolor sit amet
                    </Paragraph>
                </Section>
                <Section>
                    <HTag4>Takeaways</HTag4>
                    <Paragraph>
                        <br />
                        <span className='bold'>Designs are products of curiosity and collaboration</span> -
                        a solid understanding of our client's service in conjunction with our users'
                        expectations with the product were critical to the execution of each design phase.
                        Working on this project taught me that effective designs are created by working
                        side-by-side with people who posses varying domains of knowledge, some of which
                        may not overlap.
                    </Paragraph>
                </Section>
            </Project>
        </main>
    );
}
