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
import EntryPoint from '../assets/loblaw/trx_entry.png';
import ActionDisplay from '../assets/loblaw/trx_action_display.png';
import JobsToBeDone from '../assets/loblaw/trx_jtbd.svg';
import ActionProperties from '../assets/loblaw/trx_properties.png';

import CodeDescriptionPairs from '../assets/loblaw/trx_code_description_pairs.png';
import StatusLifecycle from '../assets/loblaw/trx_transaction_lifecycle.svg';
import TRXNavigation from '../assets/loblaw/trx_navigation.png';

import InitialRedesign from '../assets/loblaw/ph_initial_redesign.svg';
import AsIsSub from '../assets/loblaw/trx_as-is_sub.png';
import RedesignSub from '../assets/loblaw/ph_redesign_sub.svg';
import ItemCards from '../assets/loblaw/ph_item_cards.svg';
import RedesignNav from '../assets/loblaw/ph_redesign_navbar.svg';

import TransactionIterations from '../assets/loblaw/ph_transaction_iterations.svg';
import MultiToteLifecycle from '../assets/loblaw/ph_multi_tote_transactions.svg';
import ItemColumnChanges from '../assets/loblaw/ph_item_list_changes.svg';

import ColourSystem from '../assets/loblaw/ph_colours.svg';
import TransactionIcons from '../assets/loblaw/ph_transaction_icons.svg';

import SearchPlacement from '../assets/loblaw/ph_search_placement.svg';
import SearchStates from '../assets/loblaw/ph_search_states.svg';

import PatternLibrary from '../assets/loblaw/ph_pattern_library.svg';
import FinalDesign from '../assets/loblaw/ph_final_design.svg';

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
                    <span className='bold'>Role:</span>
                    &nbsp;Lead Designer with 1 Product Designer, 5 Developers and 1 Product Owner
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
                    by a PCX colleague throughout the pick process of a customer order, providing comprehensive insight regarding item status.
                </Paragraph>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Entry Point</Heading>
                    <Paragraph>
                        Transaction logs are attached to every order within the All Orders Summary, a page where grocery stores can view a
                        tabulated list of orders to be fulfilled by any given day and hour.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={EntryPoint}
                    alt='All Orders Summary'/>
                </ImgFluid>
                <ImgCaption>
                    An order’s transaction log is accessed via the “Go To” column (customer names have been obscured)
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
                <Heading type={3}>Uncovering our Problems</Heading>
                <Paragraph>
                    To find out how our colleagues feel about using the existing module, we shifted the focus of our conversations
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
                    Additionally, we discovered that actions often span multiple pages; colleagues must refer to the Line property to identify
                    which entries are connected to the same sets of lifecycles.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        Tracking item movement was a tedious task due to the existing layout of the TRX module.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Discovering Opportunities</Heading>
                <Paragraph>
                    Before proceeding with our redesign, we needed a deeper understanding of how the item pick lifecycle
                    works and how our users interact with the existing interface. We worked closely with our colleagues
                    in documenting our findings.
                </Paragraph>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Deciphering the Item Pick Lifecycle</Heading>
                    <Paragraph>
                        Transaction codes represent the different stages of the pick lifecycle and are paired within a
                        description (highlighted below). We leveraged our learnings and rephrased every code-description
                        pair using simpler terminology.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={CodeDescriptionPairs}
                    alt='Transaction codes and descriptions'/>
                </ImgFluid>
                <ImgCaption>
                    These numbers - what do they all mean?
                </ImgCaption>
                <SectionInner>
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
                    <Heading type={4} weight='heavy'>The Lifecycle Visualized</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img
                    src={StatusLifecycle}
                    alt='The pick lifecycle visualized' />
                </ImgFluid>
                <ImgCaption>
                    We mapped out the pick lifecycle to obtain a firm grasp on where each status fits within the item journey
                </ImgCaption>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Heading type={4} >
                        Our first design opportunity involved leveraging natural language to make transactions easier
                        to understand for those unfamiliar with the pick procedure.
                    </Heading>
                </IndentInner>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Navigating the Existing Layout</Heading>
                    <Paragraph>
                        TRX arranges transactions in sequentially ordered pages. Navigation consists of two sets of “Next” and
                        “Previous” buttons - the outer buttons enable users to skip pages when larger jumps are needed.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={TRXNavigation}
                    alt='TRX navigation controls'/>
                </ImgFluid>
                <ImgCaption>
                    We noticed that the existing solution becomes cumbersome to browse through when investigating logs
                    that contain large numbers of transactions.
                </ImgCaption>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Heading type={4} >
                        Our second design opportunity revolved around enabling the TRX module’s navigation experience to scale
                        more effectively across varying order sizes.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Initial Redesign</Heading>
                <Paragraph>
                    Putting together (and later refining) our redesign was a team effort that called for input from our product
                    owner and developers. We elected to split up TRX into two layers of information: the transaction level
                    and the item level.
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
                                <span className='bold'>
                                    The data we could display was limited to the same set of data that is being
                                    displayed by the existing module.
                                </span>
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                <span className='bold'>
                                    To avoid encountering performance issues, we needed to limit the number of
                                    transactions that can be displayed on the screen at once.
                                </span>
                            </Paragraph>
                        </li>
                    </List>
                </SectionInner>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Unifying a Disjoint Item Journey</Heading>
                    <Paragraph>
                        To streamline item tracking, transactions are now grouped based on the item they belong to.
                        Each transaction set is sorted latest-first so that the most “current” state of each item is
                        available to our colleagues upfront.
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
                    The search bar is placed within the navbar to accommodate the potential need for portal-wide
                    search at order-level
                </ImgCaption>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Heading type={4}>
                        Our first ideations produced some radical changes to TRX, now known as Pick History. Next, we
                        needed to ensure that the new interface is easy to use.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Validating Usability</Heading>
                <Paragraph>
                    We ran moderated tests and had several colleagues and specialists conduct mock order investigations
                    using a prototype of our redesign. Our script outlined scenarios that mirror tasks they would encounter
                    during their day-to-day work.
                    <br />
                    <br />
                </Paragraph>
                <Heading type={4} weight='heavy'>Targets We Hit</Heading>
                <List>
                    <li>
                        <Paragraph>
                            <span className='bold'>
                                Transaction descriptions were easy to understand
                            </span>
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            <span className='bold'>
                                Item statuses were easily identified
                            </span>
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            <span className='bold'>
                                Layout drastically decreased the time taken to verify staging times
                            </span>
                        </Paragraph>
                    </li>
                </List>
                <Heading type={4} weight='heavy'>What Needed Work</Heading>
                <List>
                    <li>
                        <Paragraph>
                            <span className='bold'>
                                Pick actions and load actions were hard to distinguish from one another
                            </span>
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            <span className='bold'>
                                Substitution journeys were confusing to follow
                            </span>
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            <span className='bold'>
                                Participants wanted access to the item number, a property that we thought was obsolete
                            </span>
                        </Paragraph>
                    </li>
                </List>
                <IndentInner>
                    <Heading type={4}>
                        Our redesign excelled in simplifying transaction descriptions and presenting item status upfront.
                        However, there are still pain points that we had not managed to address.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Post-Testing Evolution</Heading>
                <Paragraph>
                    We focused most of our post-testing efforts on refining our transaction layout. Collaboration with our
                    developers played a critical role in maintaining alignment regarding technical feasibility
                    as we polished our solution.
                </Paragraph>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Technical Constraints and Edge Cases</Heading>
                    <Paragraph>
                        New constraints and edge cases were discovered during the development of our new module's API,
                        which consolidates the same pieces of information as the TRX database:
                    </Paragraph>
                    <List>
                        <li>
                            <Paragraph>
                                <span className='bold'>
                                    The data model only provides the picked quantity of an item,
                                    meaning we cannot display how many items are shorted on short transactions
                                </span>
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                <span className='bold'>
                                    If units of an item are picked into multiple totes, each tote’s
                                    journey will be tracked asynchronously
                                </span>
                            </Paragraph>
                        </li>
                    </List>
                </SectionInner>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Transaction Iterations</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img
                    src={TransactionIterations}
                    alt='Transaction iterations'/>
                </ImgFluid>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Multi-Tote Item Journey</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img
                    src={MultiToteLifecycle}
                    alt='Multi-tote item journey'/>
                </ImgFluid>
                <ImgCaption>
                    Displaying a multi-tote item journey required picked quantity and tote ID to be specified
                    within staging actions
                </ImgCaption>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Item Column Changes</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img
                    src={ItemColumnChanges}
                    alt='Item column changes'/>
                </ImgFluid>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Heading type={4}>
                        Our iterations led to us opting to sort transactions earliest-first. The latest-first ordering
                        did not align with our users’ mental model due to TRX’s chronologically ascending arrangement.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Recognition Over Recall</Heading>
                <Paragraph>
                    Upon iterating our transaction designs, I discovered opportunities to better assist our colleagues in
                    differentiating action types and item journeys.
                </Paragraph>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Traffic Light Colour Sequence</Heading>
                    <Paragraph>
                        I introduced a traffic light system to distinguish between the varying fulfillment
                        levels attained by each type of action.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={ColourSystem}
                    alt='traffic light colour sequence'/>
                </ImgFluid>
                <SectionInner>
                    <Heading type={4} weight='heavy'>"[An icon] is Worth a Thousand Words"</Heading>
                    <Paragraph>
                        In adherence to a classic aphorism, timeline icons have been incorporated to serve as
                        indicators for pick and load actions.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={TransactionIcons}
                    alt='Transaction icons'/>
                </ImgFluid>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Heading type={4}>
                        I introduced key visual elements to help our colleagues distinguish between transactions
                        and “separate” timelines for different item journeys.
                    </Heading>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Contextual Search</Heading>
                <Paragraph>
                    It was confirmed after testing that our search bar within our new module would be
                    contextualized locally. As a user, we will be able to search through a customer
                    order by item name or item number.
                </Paragraph>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>If it Fitts’s, It Ships</Heading>
                    <Paragraph>
                        Our final item column design features a search bar that is 128 pixels wider and placed closer
                        to where our users will be doing most of their navigation.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={SearchPlacement}
                    alt='Search bar placement'/>
                </ImgFluid>
                <ImgCaption>
                    Fitts’s Law states that the time to acquire a target is a function of the
                    distance to and size of the target
                </ImgCaption>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Microcopy and States</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img
                    src={SearchStates}
                    alt='Search bar states and empty state'/>
                </ImgFluid>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Heading type={4}>
                        Localized context opened the opportunity to leverage an important design heuristic
                        and streamline interactions with our search bar.
                    </Heading>
                </IndentInner>
            </Section>
            
            <Section>
                <Heading type={3}>The Rebirth</Heading>
                <Paragraph>
                    During the closing phases of designing the Pick History module, we supported our developers
                    throughout implementation and user acceptance testing (UAT).
                </Paragraph>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Pattern Library</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img
                    src={PatternLibrary}
                    alt='Pattern library'/>
                </ImgFluid>
                <ImgCaption>
                    I constructed a pattern library to serve as the single source of truth during the development
                    of the new module’s frontend components
                </ImgCaption>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Launch-Ready Design</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={FinalDesign}
                    alt='Launch-ready design'/>
                </ImgFluid>
                <ImgCaption>
                    We presented our final design at the OPS Roundup, a weekly forum attended by colleagues from
                    the wider PCX operations branch
                </ImgCaption>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Heading type={4}>
                        The Pick History module was deployed to stores as part of the OPS Portal rollout at the end of April
                        2021 - the final week of my work term at Loblaw Digital.
                    </Heading>
                </IndentInner>
            </Section>
            
        </Project>
    );
}
