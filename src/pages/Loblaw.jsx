// page title
import { pageTitle } from '../components/Page/pageTitle';

// layout
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
/*import SectionInner from '../components/Page/SectionInner';
import Indent from '../components/Page/Indent';
import IndentInner from '../components/Page/IndentInner';*/

// typography
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';

// banner
import Banner from '../components/Page/Banner';
import LoblawCard from '../assets/loblaw/loblaw-card.svg';

export default function Loblaw() {

    pageTitle('Order Pick History');

    return (
        <Project>
            <Section>
                <Heading type={2}>Order Pick History</Heading>
                <SubHeading>Product Design</SubHeading>
                <Paragraph>
                    <br />
                    The Order Pick History is a module attached to every online order listed within
                    Loblaw’s grocery OPS Portal, a centralized internal tool that enables stores to
                    carry out their day-to-day operations. It provides a list of every task actioned
                    on every item associated with a given order, facilitating the quick validation and
                    troubleshooting of fulfillment completion by managers and employees.
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Company:</span>
                    &nbsp;Loblaw Digital
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Team:</span>
                    &nbsp;2 Product Designers, Product Owner
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Timeline:</span>
                    &nbsp;Ongoing
                </Paragraph>
            </Section>

            <Banner
            img={LoblawCard}
            alt='An ongoing project. Reach out for more details' />
            
        </Project>
    );
}
