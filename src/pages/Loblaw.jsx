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
import Strong from '../components/Typography/Strong';

// img containers
import Banner from '../components/Page/Banner';
import PickHistoryBanner from '../assets/loblaw/ph_banner.svg';
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
import ItemColumnChanges from '../assets/loblaw/ph_item_list_changes.svg';

import ColourSystem from '../assets/loblaw/ph_colours.svg';
import TransactionIcons from '../assets/loblaw/ph_transaction_icons.svg';

import SearchPlacement from '../assets/loblaw/ph_search_placement.svg';
import SearchStates from '../assets/loblaw/ph_search_states.svg';

import PatternLibrary from '../assets/loblaw/ph_pattern_library.svg';
import FinalDesign from '../assets/loblaw/ph_final_design.svg';

export default function Loblaw() {

    pageTitle('Ops Pick History');

    return (
        <Project>
            <Section>
                <Heading type={2}>Ops Pick History</Heading>
                <SubHeading>Product Design</SubHeading>
                <Paragraph>
                    <br />
                    Loblaw’s Ops Pick History is a tool used by PC Express (PCX) specialists to investigate
                    customer order statuses and validate fulfillment completion times.
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Company:</span>
                    &nbsp;Loblaw Digital
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Role:</span>
                    &nbsp;Primary Designer with 1 Product Designer, 5 Developers and 1 Product Owner
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Timeline:</span>
                    &nbsp;10 weeks
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Status:</span>
                    &nbsp;Shipped 🛳️
                    <br />
                    <br />
                </Paragraph>
            </Section>

            <Banner
            img={PickHistoryBanner}
            alt='Ops Pick History' />

            <Section>
                <Heading type={3}>Overview</Heading>
                <Paragraph>
                    Loblaw Digital is an innovation-oriented subsidiary of Loblaw Companies Limited, focusing on digital
                    solutions for banners operating across grocery, pharmacy and fashion. I had the privilege of interning
                    as a product designer on the PCX Fulfillment team during the winter of 2021.
                </Paragraph>
                <IndentInner>
                    <Strong>
                        Loblaw’s mission is succinctly signified by their slogan - to help Canadians “Live Life Well”.
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Ops Portal Initiative</Heading>
                <Paragraph>
                    The Ops Portal is a brand-new internal platform set to replace Loblaw’s aging grocery operations tool.
                    One of my first projects involved examining the current tool’s transaction logs (collectively referred
                    to as TRX) and leading its end-to-end transformation with support from a mentor. Our final product is
                    the Pick History - a module designed to succeed TRX within the Ops Portal.
                </Paragraph>
                <IndentInner>
                    <Strong>
                        The Ops Portal initiative aims to enhance the extensibility of Loblaw’s grocery operations
                        platform through a complete in-house rebuild of its existing components.
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Transaction Logs (TRX)</Heading>
                <Paragraph>
                    Transaction logs are key elements of the current operations platform. They record every task performed
                    by a PCX specialist (also known as a store colleague) throughout the pick process of a customer order,
                    providing comprehensive insight regarding fulfillment progress.
                </Paragraph>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Transaction Display</Heading>
                    <Paragraph>
                        Log entries (known as transactions) present critical information that describes an item’s
                        status at a specified timestamp. This includes:
                    </Paragraph>
                    <IndentInner noBar>
                        <List noMargin>
                            <li>
                                <Paragraph>
                                    <span className='bold'>Who</span>
                                    &nbsp;actioned the task on the item
                                </Paragraph>
                            </li>
                            <li>
                                <Paragraph>
                                    <span className='bold'>What</span>
                                    &nbsp;has been done to the item
                                </Paragraph>
                            </li>
                            <li>
                                <Paragraph>
                                    <span className='bold'>Where</span>
                                    &nbsp;the item is
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
                    A page of entries - transactions are sorted earliest-first
                </ImgCaption>
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
                    <Heading type={4} weight='heavy'>Usage in PCX Operations</Heading>
                    <Paragraph>
                        TRX is most often used by store colleagues to address issues regarding fulfillment
                        and validate order completion times. We reached out to determine what tasks they need to get done
                        during investigation or validation.
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
                    <Strong>
                        TRX is a tool used by PCX specialists to ensure consistent and timely fulfillment of customer orders.
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Uncovering our Problems</Heading>
                <Paragraph>
                    To find out how store colleagues feel about using the existing module, we shifted the focus
                    of our conversations towards user sentiment.
                </Paragraph>
                <List unBulleted>
                    <li>
                        <Paragraph>
                            “As is, I think [TRX] is <span className='bold'>
                            very intimidating to colleagues</span> because there are so <span className='bold'>
                            many parts to learn</span> and it’s <span className='bold'>full of information
                            </span> in every which way."
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            “Some of the descriptions of what a line is <span className='bold'>
                            can be confusing</span>... like ‘Put’ for example [is] <span className='bold'>
                            not a term used anywhere else</span>."
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            "The data is all there but <span className='bold'>
                            it can be more clear</span>."
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
                    Location changes and transaction descriptions are presented as data in the form of numbers,
                    resulting in a workflow that can appear difficult to grasp.
                </ImgCaption>
            </ImgContainer>
            <Section>
                <Paragraph>
                    It became evident that new hires are faced with a steep learning curve when onboarding onto the PCX pick procedure.
                </Paragraph>
                <IndentInner>
                    <Strong>
                        Information presented by TRX is difficult to understand; store colleagues developed proficiency
                        with the module through memorization rather than intuition.
                    </Strong>
                </IndentInner>
                <Paragraph>
                    Additionally, we discovered that actions are ungrouped and often span multiple pages; the “Line” property
                    is used to identify which entries are connected to the same sets of pick lifecycles.
                </Paragraph>
                <IndentInner>
                    <Strong>
                        Tracking item movement is a tedious task due to TRX’s existing layout.
                    </Strong>
                </IndentInner>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Deciphering the Item Pick Lifecycle</Heading>
                    <Paragraph>
                        Transaction codes represent the different stages of the pick lifecycle and are paired within a
                        description (highlighted below). I took the time to get an in-depth look at the end-to-end PCX
                        order journey, working with colleagues and my mentor in documenting our findings.
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
                    <Heading type={4} weight='heavy'>
                        Actions in Layman’s Terms
                        <br />
                        <br />
                    </Heading>
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
                    I mapped out the pick lifecycle to obtain a firm grasp on where each status fits within the item journey
                </ImgCaption>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Strong>
                        We had an opportunity to leverage natural language to make transactions easier to understand for those
                        unfamiliar with the pick procedure.
                    </Strong>
                </IndentInner>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Navigating the Existing Layout</Heading>
                    <Paragraph>
                        TRX arranges transactions in sequentially ordered pages. Navigation interactions are limited to two
                        sets of “Next” and “Previous” buttons.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={TRXNavigation}
                    alt='TRX navigation controls'/>
                </ImgFluid>
                <ImgCaption>
                    I noticed that the existing solution becomes cumbersome to browse through when investigating logs
                    that contain large numbers of transactions.
                </ImgCaption>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Strong>
                        Our next opportunity revolved around enabling the TRX module’s navigation experience to scale
                        more effectively across varying order sizes.
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Initial Redesign</Heading>
                <Paragraph>
                    Putting together (and later refining) our redesign was a team effort that called for input from our product
                    owner and developers.
                </Paragraph>
                <IndentInner>
                    <Strong>
                        As PCX specialists, we need to be able to quickly find any item within a customer order
                        so that we can identify what has happened to it.
                    </Strong>
                </IndentInner>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Constraints</Heading>
                    <List>
                        <li>
                            <Paragraph>
                                Because TRX is accessed via desktop workstations,
                                the redesigned module will be <span className='bold'>
                                displayed on a single monitor with a 16:9 aspect ratio
                                </span>
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                The data we could display was <span className='bold'>
                                limited to what was being provided by TRX</span>
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                To avoid encountering performance issues, we needed to
                                <span className='bold'>    
                                    &nbsp;restrict the number of transactions that can be displayed
                                </span>
                                &nbsp;on the screen at once
                            </Paragraph>
                        </li>
                    </List>
                </SectionInner>
                <SectionInner>
                    <Heading type={4} weight='heavy'>An All-New Layout</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img
                    src={InitialRedesign}
                    alt='The initial redesign'/>
                </ImgFluid>
                <ImgCaption>
                    An early medium-fidelity prototype - I elected to split up TRX into two layers of information:
                    the transaction level and the item level
                </ImgCaption>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Unifying a Disjoint Item Journey</Heading>
                    <Paragraph>
                        To streamline item tracking, I grouped transactions based on the items they belong to.
                        Each transaction set is sorted latest-first so that the most “current” state of each item
                        is available to users upfront.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={AsIsSub}
                    alt='Transactions displayed in TRX'/>
                </ImgFluid>
                <ImgCaption>
                    <span className='bold'>
                        Before:
                    </span>
                    &nbsp;transactions connected to the same item journey were related through the “Line” property
                </ImgCaption>
                <ImgFluid>
                    <Img screen
                    src={RedesignSub}
                    alt='Transactions displayed in our redesign'/>
                </ImgFluid>
                <ImgCaption>
                    <span className='bold'>
                        After:
                    </span>
                    &nbsp;transactions re-render based on the selected item and describe actions using simpler language
                </ImgCaption>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Surfacing Visibility of Item Status</Heading>
                    <Paragraph>
                        A navigation column facilitates one-click access to any transaction regardless of how many items are
                        present within an order log. Additionally, cards provide insight into an item’s latest status without
                        the need to select it.
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
                    alt='Search bar'/>
                </ImgFluid>
                <ImgCaption>
                    The search bar is placed within the navbar to accommodate the potential need for portal-wide
                    search at order-level
                </ImgCaption>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Strong>
                        Our first ideations produced some radical changes to TRX, now known as the Pick History.
                        Next, we needed to ensure that the new interface is easy to use.
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Validating Usability</Heading>
                <Paragraph>
                    I ran moderated usability tests and had several PCX specialists conduct mock order investigations
                    using a prototype of our redesign. My script outlined scenarios they would encounter during
                    the day-to-day operation of a store.
                </Paragraph>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>🎯 The Hits</Heading>
                    <List>
                        <li>
                            <Paragraph>
                                Action descriptions were <span className='bold'>
                                easy to understand</span>
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Item statuses were <span className='bold'>
                                easy to verify</span>
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Navigation column yielded <span className='bold'>
                                quicker staging time validation</span>
                            </Paragraph>
                        </li>
                    </List>
                </SectionInner>
                <SectionInner>
                    <Heading type={4} weight='heavy'>❌ The Misses</Heading>
                    <List>
                        <li>
                            <Paragraph>
                                Pick actions and load actions were <span className='bold'>
                                difficult to distinguish</span> from one another
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Substitution journeys were <span className='bold'>
                                confusing to follow</span>
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Latest-first transaction sequencing was <span className='bold'>
                                unintuitive</span> and <span className='bold'>
                                felt more like a “backwards flow”</span>
                            </Paragraph>
                        </li>
                    </List>
                </SectionInner>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Strong>
                        Our redesign excelled in simplifying transaction descriptions and presenting item status upfront.
                        We also uncovered pain points that needed to be addressed.
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Post-Testing Evolution</Heading>
                <Paragraph>
                    My approach to iterating our design encompassed two core foundations:
                </Paragraph>
                <List>
                    <li>
                        <Paragraph>
                            <span className='bold'>Working side-by-side with store colleagues
                            </span> in polishing our solution
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            <span className='bold'>Close collaboration with developers
                            </span> to preserve alignment on technical feasibility
                        </Paragraph>
                    </li>
                </List>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>More Constraints</Heading>
                    <Paragraph>
                        New constraints were discovered during the development of our new module's API,
                        which consolidates the same pieces of information as the TRX database:
                    </Paragraph>
                    <List>
                        <li>
                            <Paragraph>
                                The transaction <span className='bold'>
                                data model only provides the picked quantity of an item,
                                </span> meaning we <span className='bold'>
                                cannot display how many items were originally ordered
                                </span> by the customer
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Each transaction type provides <span className='bold'>
                                only one description string</span> (i.e. no “dynamic” descriptions)
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
                    <Heading type={4} weight='heavy'>Navigation Column Changes</Heading>
                </SectionInner>
                <ImgFluid>
                    <Img
                    src={ItemColumnChanges}
                    alt='Navigation column changes'/>
                </ImgFluid>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Strong>
                        My iterations led to us opting to sort transactions earliest-first. The latest-first ordering
                        did not align with our users’ mental model due to TRX’s chronologically ascending arrangement.
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Recognition Over Recall</Heading>
                <Paragraph>
                    Upon iterating our transaction designs, I discovered opportunities to better assist our users in
                    differentiating action types and item journeys.
                </Paragraph>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Traffic Light Colour Sequence</Heading>
                    <Paragraph>
                        I introduced a traffic light colour sequence to classify transactions based on the levels of
                        fulfillment they contribute to the pick lifecycle.
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
                        In adherence to a classic aphorism, timeline icons have been incorporated to serve as indicators
                        for transactions that fall outside of the expected pick actions.
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
                    <Strong>
                        I introduced key visual elements to help our colleagues identify transactions of concern and
                        “isolate” timelines for different item journeys.
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Contextual Search</Heading>
                <Paragraph>
                    It was confirmed by our product owner after testing that the search function within our new module
                    would be contextualized locally.
                </Paragraph>
                <IndentInner>
                    <Strong>
                        As a user, we will be able to search through a customer order by item name or item number.
                    </Strong>
                </IndentInner>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>If it Fitts’s, It Ships (Not a Typo)</Heading>
                    <Paragraph>
                        My final navigation column design features a search bar that is 128 pixels wider and placed
                        closer to where our users will be doing most of their navigation.
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
                    <Heading type={4} weight='heavy'>States and Microcopy</Heading>
                    <Paragraph>
                        I designed searchbar states that teach new colleagues about what they can use it for
                        and enable users to easily clear search inputs.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img
                    src={SearchStates}
                    alt='Search bar states and empty state'/>
                </ImgFluid>
                <ImgCaption>
                    The final placement of the search bar made for a nicely “contained” empty state
                </ImgCaption>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Strong>
                        Localized context allowed me to utilize an important design heuristic and
                        streamline interactions with our search bar.
                    </Strong>
                </IndentInner>
            </Section>
            
            <Section>
                <Heading type={3}>The Rebirth</Heading>
                <Paragraph>
                    During the closing phases of designing the Pick History module, I supported our developers
                    throughout implementation and user acceptance testing (UAT).
                </Paragraph>
            </Section>
            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Pattern Library</Heading>
                    <Paragraph>
                        I constructed a pattern library to serve as the single source of truth during the development
                        of the new module’s frontend components.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img
                    src={PatternLibrary}
                    alt='Pattern library'/>
                </ImgFluid>
                <ImgCaption>
                    Components have been styled in accordance with the PCX design system
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
                    We presented our final design at the Ops Roundup, a weekly forum attended by colleagues from
                    the wider PCX operations branch
                </ImgCaption>
            </ImgContainer>
            <Section>
                <IndentInner>
                    <Strong>
                        The Pick History module is currently in UAT and is set to be deployed to production 
                        in early May 2021.
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>
                    Reflection
                    <br />
                    <br />
                </Heading>
                <IndentInner>
                    <Heading type={4}>Online fulfillment is a fast-moving problem space</Heading>
                </IndentInner>
                <Paragraph>
                    Retailers are always looking for ways to operate more efficiently and better serve their consumer base.
                    I’ve found that I thrive under the pace of delivering to uphold this tenet, and it made designing the
                    Pick History module feel like play rather than work.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>Curiosity is a superpower</Heading>
                </IndentInner>
                <Paragraph>
                    Taking ownership of the Pick History design process instilled me with confidence in my ability to navigate
                    ambiguity and taught me about the importance of seeking context to solving a problem. TRX presents a
                    simple-looking interface that belies a complex layer of information, and reaching out remotely to PCX
                    specialists to understand who we were designing for was a non-trivial task.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>There is an endless tug-of-war between stakeholder requirements and technical constraints</Heading>
                </IndentInner>
                <Paragraph>
                    As designers, we all endeavour to bring “perfection” to our users. However, striving to design for the
                    ideal experience often places compromise on the technical feasibility of a product. It is important to
                    identify where a design’s constraints lie and make decisions that accommodate them.
                </Paragraph>
            </Section>
            <Section>
                <Heading type={3}>
                    What I Would Do Next
                    <br />
                    <br />
                </Heading>
                <IndentInner>
                    <Heading type={4}>Capture post-launch user feedback</Heading>
                </IndentInner>
                <Paragraph>
                    Some design opportunities don’t reveal themselves until after a product undergoes extensive unmoderated
                    usage. Getting the Ops Portal into the hands of stores opens up a wider pool of users to collect feedback
                    from, and in turn a wider pool of unseen insights.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>Explore a potential merger with another Ops Portal component</Heading>
                </IndentInner>
                <Paragraph>
                    Colleagues refer to an Order Details page to check ordered item quantities - a key piece of information
                    missing from the Pick History module. I would study the feasibility of consolidating the data provided
                    across both components to create a unified investigation tool.
                </Paragraph>
            </Section>
        </Project>
    );
}
