// page title
import pageTitle from '../components/Page/pageTitle';

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
import OngoingCard from '../assets/wip/wip-card.svg';

export default function Loblaw() {

    pageTitle('OPS Transaction Logs');

    return (
        <Project>
            <Section>
                <Heading type={2}>OPS Transaction Logs</Heading>
                <SubHeading>Loblaw Digital</SubHeading>
                <Paragraph>
                    <br />
                    Transaction logs (collectively referred to as TRX) are order modules
                    situated within Loblaw's OPS Portal, a centralized platform that enables
                    store employees to manage their day-to-day operations. They are used to
                    troubleshoot online grocery orders and validate fulfillment completion times.
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
            img={OngoingCard}
            alt='Ongoing project. Reach out for more details' />
            
        </Project>
    );
}
