// page title
import { pageTitle } from '../components/Page/pageTitle';

// layout
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
import SectionInner from '../components/Page/SectionInner';
import IndentInner from '../components/Page/IndentInner';
import List from '../components/Page/List';

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

import StatusLifecycle from '../assets/loblaw/loblaw-trx_transaction_lifecycle.svg';
import TRXNavigation from '../assets/loblaw/loblaw-trx_navigation.png';

import InitialRedesign from '../assets/loblaw/loblaw-ph_initial_redesign.svg';
import AsIsSub from '../assets/loblaw/loblaw-trx_as-is_sub.png';
import RedesignSub from '../assets/loblaw/loblaw-ph_redesign_sub.svg';
import ItemCards from '../assets/loblaw/loblaw-ph_item_cards.svg';
import RedesignNav from '../assets/loblaw/loblaw-ph_redesign_navbar.svg';

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
            alt='Loblaw Digital' />

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
                    One of my first projects involved examining the current tool’s transaction logs (collectively referred
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
                    Transaction logs are key elements of the current operations platform. They keep records of every task performed
                    by a PCX colleague throughout the pick process of an order, providing comprehensive insight regarding item status.
                </Paragraph>
            </Section>

            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Entry Point</Heading>
                    <Paragraph>
                        Transaction logs are attached to every order within the All Orders Summary, a page where grocery stores can view a
                        tabulated list of orders to be fulfilled by any given day and hour (customer names have been obscured).
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={EntryPoint}
                    alt='All Orders Summary'/>
                </ImgFluid>
                <ImgCaption>
                    An order’s transaction log is accessed via the “Go To” column
                </ImgCaption>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Action Entry Display</Heading>
                    <Paragraph>
                        Transactions present critical information regarding item status. These include:
                    </Paragraph>
                    <IndentInner nobar>
                        <List>
                            <li>
                                <Paragraph>
                                    <span className='bold'>Where an item is</span>
                                </Paragraph>
                            </li>
                            <li>
                                <Paragraph>
                                    <span className='bold'>Which container an item is placed in</span>
                                </Paragraph>
                            </li>
                            <li>
                                <Paragraph>
                                    <span className='bold'>Who was responsible for carrying out any given action on an item</span>
                                </Paragraph>
                            </li>
                        </List>
                    </IndentInner>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={ActionDisplay}
                    alt='Action entry display'/>
                </ImgFluid>
                <ImgCaption>
                    A transaction log - action entries are sorted earliest-first by timestamp
                </ImgCaption>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Usage in PCX Operations</Heading>
                    <Paragraph>
                        TRX is most often used by store colleagues and PCX specialists to address issues
                        regarding fulfillment and validate order completion times. We reached out to determine
                        what tasks they need to get done during investigation or validation.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={JobsToBeDone}
                    alt='Jobs-to-Be-Done' />
                </ImgFluid>
                <ImgCaption>
                    We utilized the Jobs-to-Be-Done framework to outline user needs
                </ImgCaption>
            </ImgContainer>

            <Section>
                <IndentInner>
                    <Heading type={4}>
                        We defined our user needs and learned about the usage of TRX as a tool to ensure consistent order fulfillment.
                        What does that experience look like for our colleagues and specialists?
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Unravelling our Problems</Heading>
                <Paragraph>
                    To uncover how our colleagues feel about using the existing module, we shifted the focus of our conversations
                    towards user sentiment.
                </Paragraph>
                <List unBulleted>
                    <li>
                        <Paragraph>
                            <span className='bold'>
                                “As is, I think [TRX] is very intimidating to colleagues because there are so many parts to learn and it’s
                                full of information in every which way.”
                            </span>
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            <span className='bold'>
                                “Some of the descriptions of what a line is can be confusing… like ‘Put’ for example [is]
                                not a term used anywhere else”
                            </span>
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            <span className='bold'>
                                “The data is all there but it can be more clear”
                            </span>
                        </Paragraph>
                    </li>
                </List>
            </Section>

            <ImgContainer>
                <ImgFluid>
                    <Img screen
                    src={ActionProperties}
                    alt='Action properties'/>
                </ImgFluid>
                <ImgCaption>
                    Location changes and transaction descriptions are presented in the form of raw data, resulting in a workflow
                    that can appear difficult to grasp.
                </ImgCaption>
            </ImgContainer>

            <Section>
                <Paragraph>
                    It became evident that new hires are faced with a steep learning curve when onboarding onto the PCX pick procedure.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        Colleagues developed proficiency with TRX through memorization rather than intuition.
                    </Heading>
                </IndentInner>
                <Paragraph>
                    Additionally, we discovered that actions are not grouped by item and often span multiple pages; colleagues must
                    refer to the number within the Line property to identify which entries are connected to the same sets of lifecycles.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        Tracking item movement was a tedious task due to the existing layout of the TRX module.
                    </Heading>
                </IndentInner>
                <Paragraph>
                    Redesigning TRX for the OPS Portal presented opportunities to establish new ways of organizing and
                    describing pick actions.
                </Paragraph>
            </Section>

            <Section>
                <Heading type={3}>Deciphering the Item Pick Lifecycle</Heading>
                <Paragraph>
                    Before proceeding with our redesign, we needed a deeper understanding of how the item pick lifecycle works.
                    We worked closely with our colleagues, specialists and product manager to document every transaction type and
                    where each transaction fits within the pick lifecycle.
                </Paragraph>
            </Section>

            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Breaking down Transaction Jargon</Heading>
                    <Paragraph>
                        Transaction codes represent the different stages of the pick lifecycle and are paired with brief descriptions.
                        We leveraged our learnings and rephrased each code-description pairing using simpler terminology:
                    </Paragraph>
                    <List unBulleted>
                        <li>
                            <Paragraph>
                                <span className='bold'>300: Picking Induct LP → </span>
                                Tote is assigned a license plate (LP) identifier
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                <span className='bold'>642: Line Skipped → </span>
                                Item is “skipped” for a picker to come back to later
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                <span className='bold'>301: Picking (Pick) → </span>
                                Item is picked and placed into a tote
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                <span className='bold'>210: Substitution by Picker → </span>
                                Item is substituted (replaced) with another item
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                <span className='bold'>641: Line Shorted → </span>
                                Item is unfulfilled (neither picked nor replaced)
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                <span className='bold'>302: Picking (Put) → </span>
                                Tote containing the item is staged in a staging area
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                <span className='bold'>321: Loading (Pick) → </span>
                                Item is being loaded onto customer's vehicle
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                <span className='bold'>323: Loading (Put) → </span>
                                Item loaded
                            </Paragraph>
                        </li>
                    </List>
                </SectionInner>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Item Status Cycle</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img
                    src={StatusLifecycle}
                    alt='Item Status Lifecycle' />
                </ImgFluid>
            </ImgContainer>

            <Section>
                <IndentInner>
                    <Heading type={4} >
                        Our first opportunity involved leveraging natural language to make transactions easier
                        to understand for those unfamiliar with the pick procedure.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Exploring the Existing Layout</Heading>
                <Paragraph>
                    After obtaining a firm grasp on the item pick procedure, we sought to learn more about how
                    our colleagues navigate through the existing interface.
                </Paragraph>
            </Section>

            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Pagination</Heading>
                    <Paragraph>
                        TRX groups transactions in sequentially ordered pages, with each page containing up to 18
                        transactions. The module provides two sets of navigation controls that enable the user to
                        move through pages at varying “skip” distances.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={TRXNavigation}
                    alt='Existing navigation flow'/>
                </ImgFluid>
                <ImgCaption>
                    We noticed that the existing solution becomes cumbersome to browse through when investigating logs
                    that contain large numbers of transactions.
                </ImgCaption>
            </ImgContainer>

            <Section>
                <IndentInner>
                    <Heading type={4} >
                        Our second opportunity revolved around enabling the TRX module’s navigation experience to scale
                        more effectively across varying order sizes.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Initial Redesign</Heading>
                <Paragraph>
                    Putting together (and later refining) our redesign was a team effort that called for
                    input from our colleagues, specialists, product manager and developers. We elected to split up
                    TRX into two layers of information: the transaction level and the item level.
                </Paragraph>
            </Section>

            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>The Reworked Module Layout</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={InitialRedesign}
                    alt='The initial redesign'/>
                </ImgFluid>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Technical Constraints</Heading>
                    <List>
                        <li>
                            <Paragraph>
                                The data we could display was limited to the same set of data that is being
                                displayed by the existing module.
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                To avoid encountering performance issues, we needed to limit the number of
                                transactions that can be displayed on the screen at once.
                            </Paragraph>
                        </li>
                    </List>
                </SectionInner>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Unifying a Disjoint Item Journey</Heading>
                    <Paragraph>
                        To streamline item tracking, transactions are now grouped based on the item they belong to.
                        Each transaction set is sorted latest-first so that the most “current” state of each item is
                        available to our colleagues upfront. We incorporated the revamped transaction
                        descriptions we created while mapping out the pick lifecycle.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={AsIsSub}
                    alt='Substitutions as they exist in TRX'/>
                </ImgFluid>
                <ImgCaption>
                    A substitution lifecycle in TRX (highlighted in orange) - prior to the redesign, relationships
                    between ordered and substitute items were indicated by the Line property
                </ImgCaption>
                <ImgFluid>
                    <Img screen
                    src={RedesignSub}
                    alt='Substitutions in the initial redesign'/>
                </ImgFluid>
                <ImgCaption>
                    The same substitution cycle in our redesign - the data displayed at transaction-level
                    changes based on the selected item card
                </ImgCaption>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Surfacing Visibility of Item Status</Heading>
                    <Paragraph>
                        The “All Items” list facilitates one-click access to any transaction regardless of how many
                        items are present within an order log. Additionally, cards provide insight into an item’s
                        latest status without the need to select it from the item list.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={ItemCards}
                    alt='Item cards'/>
                </ImgFluid>
                <ImgCaption>
                    Each item card displays a timestamp and status describing the latest action carried out on it
                </ImgCaption>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Introducing Order-level Search</Heading>
                    <Paragraph>
                        Colleagues will often go into TRX knowing exactly which items they want to look into. We
                        introduced a search function to enable access to these items without the need for too much
                        scrolling.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={RedesignNav}
                    alt='Search bar placement'/>
                </ImgFluid>
                <ImgCaption>
                    The search bar is placed within the navbar to accommodate the potential need for a portal-wide
                    search at order-level
                </ImgCaption>
            </ImgContainer>

            <Section>
                <IndentInner>
                    <Heading type={4}>
                        Our ideation run produced some radical changes to TRX. We needed to make sure that our new
                        layout is easy to use by addressing potential pain points.
                    </Heading>
                </IndentInner>
            </Section>
            
        </Project>
    );
}
