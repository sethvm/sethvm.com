// page title
import pageTitle from '../components/Page/pageTitle';

// layout
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
import SectionInner from '../components/Page/SectionInner';
import IndentInner from '../components/Page/IndentInner';

// img containers
import Banner from '../components/Page/Banner';
import ImgContainer from '../components/Page/ImgContainer';
import ImgFluid from '../components/Page/ImgFluid';
import ImgCaption from '../components/Page/ImgCaption';
import Img from '../components/Page/Img';

// typography
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';

// banner
import SoulfxCard from '../assets/soulfx/soulfx-card.svg';
import Methodology from '../assets/soulfx/soulfx-methodology.svg';

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
import PortalWorkflow from '../components/soulfx/soulfx-portal_workflow.svg';
import ProgramDetails from '../components/soulfx/soulfx-program_details.svg';
import ProgramSelection from '../components/soulfx/soulfx-program_selection.svg';
import ProgramCards from '../components/soulfx/soulfx-program_cards.svg';*/

export default function Soulfx() {

    pageTitle('Patient Support App');

    return(
        <Project>
            <Section>
                <Heading type={2}>Patient Support App</Heading>
                <SubHeading>UX Design</SubHeading>&nbsp;/&nbsp;
                <SubHeading>Info Architecture</SubHeading>
                <Paragraph>
                    <br />
                    Soulfx's Patient Support Application is a web-based
                    platform developed for a client within the
                    pharmaceutical industry. It facilitates the remote delivery
                    of a service that provides financial assistance to Canadian
                    patients for medical payments such as therapy and prescriptions.
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Company:</span>
                    &nbsp;Soulfx Technologies Inc.
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Client:</span>
                    &nbsp;Multinational pharmaceutical company
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Team:</span>
                    &nbsp;2 Designers, Product Owner, Project Manager
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Timeline:</span>
                    &nbsp;Jul 2020 - Aug 2020 (8 weeks)
                </Paragraph>
            </Section>

            <Banner
            img={SoulfxCard}
            alt='Soulfx Patient Support App' />

            <Section>
                <Heading type={3}>Overview</Heading>
                <Paragraph>
                    Soulfx Technologies Inc. is a Mississauga-based software consulting firm
                    that focuses on building applications for clients within the healthcare indusry.
                    I worked as a Software Designer within the product team during the summer of 2020,
                    where we worked closely with a multinationally based pharmaceutical client in
                    executing an end-to-end design project.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        Soulfx specializes in the development of platforms that drive innovation
                        within the healthcare sector.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type ={3}>An ongoing health crisis</Heading>
                <Paragraph>
                    COVID-19 has brought with it a global-scale challenge that
                    has pushed the capacity of our healthcare sectors to their limit.
                    Our client approached us with the objective of moving their
                    financial aid service online - a shift to web-based support
                    that was necessary to minimize the risk imposed by the pandemic
                    on immunocompromised individuals.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        How can we design a platform that will enable our client
                        to provide their support service to patients remotely?
                    </Heading>
                </IndentInner>
            </Section>

            <ImgContainer>
                <ImgFluid>
                    <Img
                    src={Methodology}
                    alt='The design approach' />
                </ImgFluid>
                <ImgCaption>
                    An outline of our approach
                </ImgCaption>
            </ImgContainer>

            <Section>
                <Heading type={3}>Our client's assistance service</Heading>
                <Paragraph>
                    Participating manufacturers registered within our client's service
                    offer their own collection of program plans, which provide
                    prescription cards for select products. These prescription cards in
                    turn can be redeemed by patients for payment deductions.
                    Program plans can be restricted to specified provinces or offered Canada-wide.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        Our client's support service aims to make prescription repayment
                        easier via reimbursements for pharmaceutical expenses.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Jobs-to-be-done</Heading>
                <Paragraph>
                    [Write about user groups and what each group wants to do with the platform]
                    Even though we designed our client's application from the ground up,
                    we were working with a service that was already up and running. Our user audience
                    consisted of two groups:
                </Paragraph>
            </Section>

            <Section>
                <Heading type={3}>Laying out the groundwork</Heading>
                <Paragraph>
                    Write about user flows and information hierarchy for both user groups
                </Paragraph>
            </Section>

            <Section>
                <Heading type={3}>Putting it all together</Heading>
                <Paragraph>
                    Write about the objective of each set of designs and how our approach
                    helped in making the service easy to provide and cards easy to retreive.
                    Briefly discuss business objectives within glass container.
                </Paragraph>
            </Section>

            <ImgContainer>
                <SectionInner>
                    <Heading type={4}>
                        Record Management Dashboard
                    </Heading>
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
                    <Heading type={4}>
                        Card Retrieval Portal
                    </Heading>
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
                <Heading type={3}>Key interactions</Heading>
                <Paragraph>
                    Write about breadcrumbs + switches, and what pain points they address -
                    refer to the old write-up!
                </Paragraph>
            </Section>

            <Section>
                <Heading type={3}>
                    Takeaways and opportunities for refinement
                    <br />
                    <br />
                </Heading>
                <IndentInner>
                    <Heading type={4}>
                        Designs are products of curiosity and collaboration
                    </Heading>
                </IndentInner>
                <Paragraph>
                    <br />
                    A solid understanding of our client's service in conjunction with our users'
                    expectations with the product were critical to the execution of each design phase.
                    Working on this project taught me that effective designs are created by working
                    side-by-side with people who posses varying domains of knowledge, some of which
                    may not overlap.
                    <br />
                    <br />
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        We can utilize design to help out our essential industries, even amid a pandemic
                    </Heading>
                </IndentInner>
                <Paragraph>
                    <br />
                    I do not have the resources nor the know-how to help patients with their
                    medical expenses, but a critical objective of my role as a designer was to learn about
                    the people who do. The project provided an opportunity to leverage this understanding
                    to mitigate the increase in pressure brought to our client's caseworkers by the pandemic
                    and play a part in making healthcare services more accessible through design.
                    <br />
                    <br />
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        Upon a hypothetical return to this project, I would aim to further streamline
                        the navigation experience for our record management dashboard
                    </Heading>
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
    );
}
