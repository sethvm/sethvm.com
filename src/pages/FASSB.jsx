//page title
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
import FASSBCard from '../assets/fassb/fassb-card.svg';

export default function FASSB() {

    pageTitle('Employment Services Transformation');

    return (
        <Project>
            <Section>
                <Heading type={2}>Employment Services Transformation</Heading>
                <SubHeading>Web Design</SubHeading>
                <Paragraph>
                    <br />
                    The Employment Services Transformation (EST) project is an ongoing
                    overhaul of Employment Ontario's assistance services. Its objective
                    is to provide a more streamlined job search experience for Ontarians
                    through new outcome-focused delivery models.
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Company:</span>
                    &nbsp;Ministry of Labour - Finance, Analysis and Systems Support Branch
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Team:</span>
                    &nbsp;UX/Web Designer, Product Owner, 2 Project Officers
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Timeline:</span>
                    &nbsp;16 weeks
                </Paragraph>
            </Section>

            <Banner
            img={FASSBCard}
            alt='Finance, Analysis and Systems Support Branch' />

            <Section>
                <Heading type={3}>Overview</Heading>
                <Paragraph>
                    The Finance, Analysis and Systems Support Branch (FASSB) is a
                    Toronto-based division of Ontario's Ministry of Labour.
                </Paragraph>
            </Section>
        </Project>
    );
}
