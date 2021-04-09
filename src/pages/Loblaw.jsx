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
                    Transaction logs (collectively referred to as TRX) are order modules
                    situated within Loblaw's OPS Portal, a centralized platform that enables
                    store employees to manage their day-to-day operations. They are used to
                    troubleshoot online grocery orders and validate fulfillment completion times.
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
