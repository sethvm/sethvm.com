// page title
import { pageTitle } from '../components/Page/pageTitle';

// layout
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
/*import SectionInner from '../components/Page/SectionInner';
import Indent from '../components/Page/Indent';*/
import IndentInner from '../components/Page/IndentInner';

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
                    Loblaw’s Order Pick History provides a list of all tasks actioned on every item associated with a
                    given grocery order. It is used as a tool by store colleagues and area managers to troubleshoot orders
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
                    Loblaw Digital is an innovation-oriented subsidiary of Loblaw Companies Ltd., focusing on digital
                    solutions for banners operating across grocery, pharmacy and fashion. I had the privilege of serving
                    as a product design intern on the PC Express (PCX) Fulfillment team during the winter of 2021.
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
                    product is the Order Pick History - a module designed to succeed TRX within the OPS Portal.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        The OPS Portal initiative aims to enhance the extensibility of Loblaw’s grocery operations
                        platform through a complete in-house rebuild of its existing components.
                    </Heading>
                </IndentInner>
            </Section>
        </Project>
    );
}
