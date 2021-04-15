// page title
import { pageTitle } from '../components/Page/pageTitle';

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

// visuals
import Outline from '../assets/soulfx/soulfx-outline.svg';
import JobsToBeDone from '../assets/soulfx/soulfx-jtbd.svg';
import EndtoEnd from '../assets/soulfx/soulfx-end-to-end.svg';
import RecordIA from '../assets/soulfx/soulfx-record-ia.svg';

import RecordList from '../assets/soulfx/soulfx-list_view.svg';
import RecordDetails from '../assets/soulfx/soulfx-company_details.svg';
import ProgramDetails from '../assets/soulfx/soulfx-program_details.svg';
import RecordAddition from '../assets/soulfx/soulfx-add_company.svg';
import RecordAddConfirm from '../assets/soulfx/soulfx-add_company_2.svg';

import ProgramSelect from '../assets/soulfx/soulfx-program_selection.svg';
import ProgramCardDispense from '../assets/soulfx/soulfx-program_cards.svg';

/*old graphics - to be reworked*/
/*
import CertListAnnotated from '../components/soulfx/soulfx-cert_list_annotated.svg';
import EnterpriseWorkflow from '../components/soulfx/soulfx-enterprise_workflow.svg';
import ProgramDetails from '../components/soulfx/soulfx-program_details.svg';
*/

export default function Soulfx() {

    pageTitle('Patient Support App');

    return(
        <Project>
            <Section>
                <Heading type={2}>Patient Support App</Heading>
                <SubHeading>Software</SubHeading>&nbsp;/&nbsp;
                <SubHeading>UX Design</SubHeading>
                <Paragraph>
                    <br />
                    Soulfx’s Patient Support Platform is a web-based application
                    developed for a pharmaceutical firm. It facilitates the remote
                    management and operation of a service that provides financial
                    assistance to Canadian patients for medical payments such as
                    prescriptions and therapy.
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
                    &nbsp;8 weeks
                </Paragraph>
            </Section>

            <Banner
            img={SoulfxCard}
            alt='Soulfx Patient Support App' />

            <Section>
                <Heading type={3}>Overview</Heading>
                <Paragraph>
                    Soulfx Technologies Inc is a Mississauga-based software consulting
                    firm that focuses on creating applications for clients within the
                    healthcare industry. I worked as a Software Designer within the product
                    team during the summer of 2020, where we worked closely with a multinational
                    pharmaceutical client in executing an end-to-end design project.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        Soulfx specializes in the development of software products
                        that drive innovation within the healthcare sector.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type ={3}>An unprecedented Health Crisis</Heading>
                <Paragraph>
                    COVID-19 has brought with it a global-scale challenge that has pushed
                    the capacity of our healthcare industries to their limits. Our client
                    approached us with the objective of moving their financial aid service
                    online – a shift to web-based operations aimed at mitigating the risks
                    imposed by the pandemic on immunocompromised individuals.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        How can we design a platform that will enable our client to provide
                        their support service to patients remotely?
                    </Heading>
                </IndentInner>
            </Section>

            <ImgContainer>
                <ImgFluid>
                    <Img
                    src={Outline}
                    alt='The design outline' />
                </ImgFluid>
                <ImgCaption>
                    An outline of our approach
                </ImgCaption>
            </ImgContainer>

            <Section>
                <Heading type={3}>Our client's Assistance Service</Heading>
                <Paragraph>
                    Manufacturers registered under our client’s service platform offer their
                    own collection of financial assistance and/or therapy program plans, which
                    provide prescription certificates. These certificates in turn can be redeemed
                    by patients for reimbursements upon purchasing select drugs. Program plans
                    can be restricted to certain provinces or offered Canada-wide.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        Our client works alongside pharmaceutical manufacturers in making prescription
                        payment easier by providing reimbursements to patients for medical expenses.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Jobs to Be Done</Heading>
                <Paragraph>
                    We designed our client’s application from the ground up – however, we worked
                    with a service that was already in operation. Thus, we conducted generative research
                    with the intention of identifying our user groups and what outcomes each group wants
                    to achieve by interacting with our platform.
                </Paragraph>
            </Section>

            <ImgContainer>
                <ImgFluid>
                    <Img
                    src={JobsToBeDone}
                    alt='our user groups and objectives' />
                </ImgFluid>
                <ImgCaption>
                    Our user groups and objectives
                </ImgCaption>
            </ImgContainer>

            <Section>
                <IndentInner>
                    <Heading type={4}>
                        We learned about who our users are and what they want out of our platform.
                        What do their journeys within the existing service look like?
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Reimbursement Lifecycle</Heading>
                <Paragraph>
                    We sought to get an in-depth look at how the support platform itself works and how
                    our users interact with it. To visualize our user journeys, we created a lifecycle
                    diagram to document the steps taken from onboarding a new manufacturer to distributing
                    the manufacturer’s program cards to patients.
                </Paragraph>
            </Section>

            <ImgContainer>
                <ImgFluid>
                    <Img
                    src={EndtoEnd}
                    alt='end-to-end reimbursement flow' />
                </ImgFluid>
                <ImgCaption>
                    End-to-end reimbursement flow
                </ImgCaption>
            </ImgContainer>

            <Section>
                <Paragraph>
                    Upon mapping out the patient journey, we learned that each program could provide only one
                    of two types of certificates. National-level certificates enable reimbursement access to patients
                    regardless of province, while provincial-level certificates restrict a program’s availability to
                    specified provinces. Furthermore, the availability of cards offered by programs continuously
                    fluctuate based on demand.
                </Paragraph>
                <Paragraph>
                    Furthermore, it became clear from modelling the caseworker journey that <strong>there was a discernible
                    hierarchy in how records are organized</strong>. We took this as an opportunity to create an architecture diagram
                    and illustrate a more granular view of the details being managed within each tier of information.
                </Paragraph>
            </Section>

            <ImgContainer>
                <ImgFluid>
                    <Img
                    src={RecordIA}
                    alt='record information artichetcure' />
                </ImgFluid>
                <ImgCaption>
                    Record information artichetcure
                </ImgCaption>
            </ImgContainer>

            <Section>
                <Paragraph>
                    Due to the limited amount of time we had to develop a comprehensive understanding of our
                    client’s support program, these flows would play a critical role later in the project
                    with ensuring alignment with our developers.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        Clarity was established regarding how our client’s service operates –
                        how can we ensure that our to-be design encompasses the tasks we have outlined?
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Putting it All Together</Heading>
                <Paragraph>
                    Our designed solution is an application consisting of two components: a record management dashboard for
                    our caseworkers and a small public-facing portal for our patients to retrieve program cards through. We
                    ensured during prototyping that all tasks defined by the end-to-end reimbursement journey were facilitated
                    by each component for its respective user group.
                </Paragraph>
            </Section>

            <ImgContainer>
                <SectionInner>
                    <Heading type={4}>Record Management Dashboard</Heading>
                    <Paragraph>
                        The majority of our prototyping focus went into ensuring that our record management dashboard
                        incorporates every bit of information outlined in our information architecture diagram. We employed
                        a single-column layout to allow caseworkers to quickly scan top-down through lists and record details
                        - this pattern is kept consistent across all tiers of information.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={RecordList}
                    alt='Company record list' />
                </ImgFluid>
                <ImgCaption>
                    Company record list
                </ImgCaption>
                <ImgFluid>
                    <Img item
                    src={RecordDetails}
                    alt='Company details' />
                    <Img item
                    src={ProgramDetails}
                    alt='Program details'/>
                </ImgFluid>
                <ImgCaption>
                    Company and program record details
                </ImgCaption>
                <ImgFluid>
                    <Img item
                    src={RecordAddition}
                    alt='Record addition' />
                    <Img item
                    src={RecordAddConfirm}
                    alt='Addition confirmation'/>
                </ImgFluid>
                    <ImgCaption>
                        Record additon
                    </ImgCaption>
                <SectionInner>
                    <Heading type={4}>Public-facing Portal</Heading>
                    <Paragraph>
                        Our design for the public-facing portal was kept minimal as we placed priority in producing an intuitive
                        navigation experience for our client’s caseworkers via the record dashboard. We aimed to make the card
                        retrieval screens as simple as possible for our early adopters and easy to navigate using both desktop
                        and touch inputs.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img item
                    src={ProgramSelect}
                    alt='Program selection' />
                    <Img item
                    src={ProgramCardDispense}
                    alt='Program card retrieval' />
                </ImgFluid>
                <ImgCaption>
                    Program selection and card retrieval
                </ImgCaption>
            </ImgContainer>

            <Section>
                <IndentInner>
                    <Heading type={4}>
                        Our primary objective with the deadlines had to meet was to get our client operating fully
                        remotely and deliver a design for a public-facing portal that can be iterated upon.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Validating our Solution</Heading>
                <Paragraph>
                    We validated our record dashboard design by placing caseworkers in scenarios that mirror tasks
                    they might encounter during their day-to-day work. Using a high-fidelity prototype, we had
                    participants add, delete and edit record details to fulfill mock manufacturer requests. Our
                    usability test also involved edits to provincial or national availability for program plans.
                </Paragraph>
            </Section>

            <ImgContainer>
                <SectionInner>
                    <Heading type={4}>Breadcrumb Navigation</Heading>
                    <Paragraph>
                        Breadcrumbs simplify the dashboard navigation experience by reducing the number of clicks
                        required to access higher-order screens from lower tiers of information. Our caseworkers
                        often have to make changes to a company’s details editing a program or certificate - breadcrumbs
                        mitigate the need to repeatedly click the “Back” button.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <div>[ breadcrumb visual ]</div>
                </ImgFluid>
                <ImgCaption>
                    Breadcrumbs
                </ImgCaption>
                <SectionInner>
                    <Heading type={4}>Activation Switches</Heading>
                    <Paragraph>
                        Manufacturers frequently make changes to the programs and certificates they offer, and will
                        occasionally switch between servicing at the provincial and national levels. We included activation
                        switches at the list level for certificates to avoid the need for caseworkers to navigate to each
                        individual certificate’s property screen to activate or deactivate it.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <div>[ switch visual on certificate list ]</div>
                </ImgFluid>
                <ImgCaption>
                    Provincial and national-level switches
                </ImgCaption>
                <SectionInner>
                    <Paragraph>
                        Furthermore, activation switches also serve as visual indicators - they are used to make a given company
                        or program’s status more recognizable.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <div>[ switch visual on record detail list ]</div>
                </ImgFluid>
                <ImgCaption>
                    Activation switch on record details
                </ImgCaption>
            </ImgContainer>

            <Section>
                <Heading type={3}>
                    Takeaways and Opportunities for Refinement
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
                    A concrete understanding of our client's service in conjunction with our users' expectations
                    with the product were critical to the execution of each design phase. Working on this project
                    taught me that effective designs are created by working side-by-side with people who possess
                    varying domains of knowledge, some of which may not overlap.
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
                    I do not have the resources nor the know-how to help patients with their medical expenses,
                    but a critical element of my role as a designer was to learn about the people who do. The
                    project provided an opportunity to leverage this understanding and contribute to improving
                    accessibility to healthcare services through design.
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
