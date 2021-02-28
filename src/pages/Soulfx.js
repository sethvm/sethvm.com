import React from 'react';

/*layout imports*/
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
import SectionInner from '../components/Page/SectionInner';
import IndentInner from '../components/Page/IndentInner';

/*image container imports*/
import Banner from '../components/Page/Banner';
import ImgContainer from '../components/Page/ImgContainer';
import ImgFluid from '../components/Page/ImgFluid';
import ImgCaption from '../components/Page/ImgCaption';

/*typography imports*/
import HTag2 from '../components/Page/HTag2';
import HTag3 from '../components/Page/HTag3';
import HTag4 from '../components/Page/HTag4';
import Paragraph from '../components/Page/Paragraph';

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
                        &nbsp;Soulfx Technologies
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Client:</span>
                        &nbsp;Multinational pharmaceutical company (confidential as per NDA)
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Team:</span>
                        &nbsp;2 Designers (including myself), Product Manager, Project Manager
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Timeline:</span>
                        &nbsp;May 2020 - Aug 2020 (10 weeks)
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Tools:</span>
                        &nbsp;Adobe XD, Draw.io
                    </Paragraph>
                </Section>

                <Banner
                img={SoulfxCard}
                alt='Soulfx Patient Support App' />

                <Section>
                    <HTag3>An ongoing health crisis</HTag3>
                    <Paragraph>
                        COVID-19 has brought with it a global-scale challenge that
                        has pushed the capacity of our healthcare sectors to their limit.
                        A client approached Soulfx with the objective of moving their
                        financial aid service online - a shift to web-based support
                        that was necessary to minimize the risk imposed by the pandemic
                        on immunocompromised individuals.
                        <br />
                    </Paragraph>
                    <IndentInner>
                        <HTag4>
                            How can we design a platform that will enable our client
                            to provide their support service to patients remotely?
                        </HTag4>
                    </IndentInner>
                </Section>

                <ImgContainer>
                    <ImgFluid>
                        <div>[ insert design process diagram ]</div>
                    </ImgFluid>
                    <ImgCaption>
                        Our approach
                    </ImgCaption>
                </ImgContainer>

                <Section>
                    <HTag3>Assisting patients with expenses</HTag3>
                    <Paragraph>
                        Participating manufacturers registered within our client's service
                        offer their own collection of program plans, which provide
                        prescription cards for select products. These prescription cards in
                        turn can be redeemed by patients for payment deductions.
                        Program plans can be restricted to specified provinces or offered Canada-wide.
                        <br />
                    </Paragraph>
                    <IndentInner>
                        <HTag4>
                            Our client's support service aims to make prescription repayment
                            easier via reimbursements for pharmaceutical expenses.
                        </HTag4>
                    </IndentInner>
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
