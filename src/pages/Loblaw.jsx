// page title
import { pageTitle } from '../components/Page/pageTitle';

// layout
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
import SectionInner from '../components/Page/SectionInner';
/*import Indent from '../components/Page/Indent';*/
import IndentInner from '../components/Page/IndentInner';

// typography
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';

// img containers
import Banner from '../components/Page/Banner';
import LoblawCard from '../assets/loblaw/loblaw-card.svg';
import ImgContainer from '../components/Page/ImgContainer';
import ImgFluid from '../components/Page/ImgFluid';
import ImgCaption from '../components/Page/ImgCaption';
import Img from '../components/Page/Img';

// visuals
import EntryPoint from '../assets/loblaw/loblaw-trx_entry.png';
import ActionDisplay from '../assets/loblaw/loblaw-trx_action_display.png';
import JobsToBeDone from '../assets/loblaw/loblaw-trx_jtbd.svg';
import ActionProperties from '../assets/loblaw/loblaw-trx_properties.png';

export default function Loblaw() {

    pageTitle('OPS Pick History');

    return (
        <Project>
            <Section>
                <Heading type={2}>OPS Pick History</Heading>
                <SubHeading>Product Design</SubHeading>
                <Paragraph>
                    <br />
                    Loblaw’s OPS Pick History provides a list of all tasks actioned on every item associated with a given
                    grocery order. It is used as a tool by PC Express (PCX) colleagues and specialists to troubleshoot orders
                    and validate fulfillment objectives.
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Company:</span>
                    &nbsp;Loblaw Digital
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Team:</span>
                    &nbsp;2 Designers, 5 Developers, Product Manager
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Status:</span>
                    &nbsp;In development {'\u{1F4BB}'}
                    <br />
                    <br />
                </Paragraph>
                <IndentInner>
                    <Paragraph>
                        <span className='bold italic'>
                            This is an ongoing project - don't hesitate to reach out for more details!
                        </span>
                    </Paragraph>
                </IndentInner>
            </Section>

            <Banner
            img={LoblawCard}
            alt='An ongoing project. Reach out for more details' />

            <Section>
                <Heading type={3}>Overview</Heading>
                <Paragraph>
                    Loblaw Digital is an innovation-oriented subsidiary of Loblaw Companies Limited, focusing on digital
                    solutions for banners operating across grocery, pharmacy and fashion. I had the privilege of interning
                    as a product designer on the PCX Fulfillment team during the winter of 2021.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        Loblaw’s mission is succinctly signified by their slogan - to help Canadians “Live Life Well”.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>The OPS Portal</Heading>
                <Paragraph>
                    The OPS Portal is a brand-new internal platform set to replace Loblaw’s aging grocery operations tool.
                    One of my first projects involved examining the current tool’s Transaction Logs (collectively referred
                    to as TRX) and collaborating on the introduction of a renewed experience with another designer. Our final
                    product is the Pick History - a module designed to succeed TRX within the OPS Portal.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        The OPS Portal initiative aims to enhance the extensibility of Loblaw’s grocery operations
                        platform through a complete in-house rebuild of its existing components.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Transaction Logs (TRX)</Heading>
                <Paragraph>
                    A key element of the current operations platform is the All Orders Summary, a page where grocery
                    stores can view a tabulated list of orders to be fulfilled by any given day and hour. Transaction
                    Logs (also known as TRX modules) are attached to each order’s entry - these record picker actions
                    throughout the fulfillment process of an order.
                </Paragraph>
            </Section>

            <ImgContainer>
                {/*<SectionInner>
                    <Heading type={4} weight='heavy'>Orders Summary Entry Point</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={EntryPoint}
                    alt='Orders summary entry point'/>
                </ImgFluid>
                <ImgCaption>
                    The All Orders Summary page. Entry points to Transaction Logs are situated under each order’s “Go To”
                    column. Customer names have been obscured.
                </ImgCaption>*/}
                <SectionInner>
                    <Heading type={4} weight='heavy'>Action Entry Display</Heading>
                    <Paragraph>
                        Action entries present critical information regarding what has been done to any given item: these include
                        where the item is, which container it is placed in, what has been done to it and who is responsible for
                        carrying out any given action on it.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={ActionDisplay}
                    alt='Action entry display'/>
                </ImgFluid>
                <ImgCaption>
                    A Transaction Log - action entries are sorted earliest-first by timestamp
                </ImgCaption>
            </ImgContainer>

            <Section>
                <Heading type={3}>Order Issue Resolution</Heading>
                <Paragraph>
                    Transaction Logs are most often used by store colleagues as tools to address issues regarding fulfillment and
                    validate order completion times. We reached out to determine what tasks they look to get done during
                    investigation or validation.
                </Paragraph>
            </Section>

            <ImgContainer>
                <SectionInner>
                    <Heading type={4}>PCX Colleague/Specialist Jobs-to-be-Done</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img
                    src={JobsToBeDone}
                    alt='Jobs to be done' />
                </ImgFluid>
            </ImgContainer>

            <Section>
                <IndentInner>
                    <Heading type={4}>
                        We discovered that TRX is used by store colleagues and PCX Specialists to ensure consistent fulfillment.
                        What sort of experience does it provide to our users?
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Unravelling our Problems</Heading>
                <Paragraph>
                    To uncover how our colleagues feel about using the existing module, we shifted the focus of our conversations
                    towards user sentiment.
                </Paragraph>
            </Section>

            <Section>
                <Paragraph>
                    It became evident that new colleagues are introduced to a steep learning curve when onboarding onto the PCX pick
                    procedure. Location changes and transaction descriptions are presented in the form of raw data, resulting in a
                    workflow that can appear difficult to grasp.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        Colleagues developed proficiency with TRX through memorization rather than intuition.
                    </Heading>
                </IndentInner>
            </Section>

            <ImgContainer>
                <ImgFluid>
                    <Img screen
                    src={ActionProperties}
                    alt='Action properties'/>
                </ImgFluid>
                <ImgCaption>
                    A high-level breakdown of what each action property describes
                </ImgCaption>
            </ImgContainer>

            <Section>
                <Paragraph>
                    Additionally, we uncovered a navigation pain point stemming from the arrangement of action entries. Actions are
                    not grouped by item and often span multiple pages; colleagues must refer to the number within the Line property
                    to identify which entries are connected to the same sets of lifecycles.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        Tracking item movement was a tedious task due to the existing layout of the TRX module.
                    </Heading>
                </IndentInner>
                <Paragraph>
                    Redesigning TRX for the OPS Portal presented opportunities to establish new ways of organizing and describing pick
                    actions. However, we needed a deeper understanding of how the item pick lifecycle works before proceeding.
                </Paragraph>
            </Section>
        </Project>
    );
}
