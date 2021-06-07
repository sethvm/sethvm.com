// page title
import { pageTitle } from '../components/Page/pageTitle';

// layout imports
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
import List from '../components/Page/List';

// img containers
import ImgContainer from '../components/Page/ImgContainer';
import ImgFluid from '../components/Page/ImgFluid';
import Img from '../components/Page/Img';

// typography
import Heading from '../components/Typography/Heading';
import Paragraph from '../components/Typography/Paragraph';

// files
import ResumeFile from '../pdf/sethvm_resume.pdf';

// imgs
import SkyDive from '../assets/about/skydive.jpg';
import Gondola from '../assets/about/gondola.jpg';

export default function About() {

    pageTitle('About');

    return (
        <Project>
            <Section>
                <Heading type={2}>
                    Thanks for dropping by! I am...
                    <br />
                    <br />
                </Heading>
                <Heading type={3} weight='heavy'>
                    ... a student in Human-centered Design
                </Heading>
                <Paragraph>
                    I'm a Systems Design Engineering (SYDE) undergrad at the University of Waterloo.
                    SYDE is a unique program that emphasizes the utilization of multi-disciplinary
                    approaches to tackling technological and socio-economic challenges we face today.
                </Paragraph>
                <Paragraph>
                    My endeavours in design revolve around improving the quality of life for others.
                    Most recently, I explored problem spaces within the commerce and healthcare sectors as well as
                    how they've been affected by the COVID-19 pandemic.
                    <br />
                    <br />
                </Paragraph>
                <Heading type={3} weight='heavy'>
                    ... a zealous adrenaline junkie
                </Heading>
                <Paragraph>
                    Should you ever need to find me outside of school and work, there's a
                    good chance I'll be working on dynos at the bouldering gym, amping up to hit
                    deadlifts in the weight room or hiking up a mountain somewhere. Occasionally,
                    I enjoy jumping out of aircraft - with a parachute strapped to my back, of course.
                    <br />
                    <br />
                </Paragraph>
                <Heading type={3} weight='heavy'>
                    ... an avid baker
                </Heading>
                <Paragraph>
                    Having worked as a full-time baker prior to university, I spend time keeping my pastry craft sharp.
                    Lately, I've been working towards perfecting my soufflé texture.
                </Paragraph>
            </Section>

            <Section>
                    <Heading type={2}>
                        Keen to collab?
                        Let's get in touch!
                        <br />
                        <br />
                    </Heading>
                <List unBulleted noMargin>
                    <li>
                        <Heading type={3} weight='bold'>
                            Say hi on
                            <ExternalLink
                            href='https://www.linkedin.com/in/sethvm'>
                                LinkedIn
                            </ExternalLink>
                            <br />
                            <br />
                        </Heading>
                    </li>
                    <li>
                        <Heading type={3} weight='bold'>
                            Toss over an
                            <ExternalLink
                            href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'>
                                email
                            </ExternalLink>
                            <br />
                            <br />
                        </Heading>
                    </li>
                    <li>
                        <Heading type={3} weight='bold'>
                            Running late to a meeting? Grab a
                            <ExternalLink
                            href={ResumeFile}>
                                tl;dr
                            </ExternalLink> of my experience
                        </Heading>
                    </li>
                </List>
            </Section>

            <ImgContainer clear>
                <ImgFluid>
                    <Img item
                    src={SkyDive}
                    alt='Skydiving at Hamilton' />
                    <Img item
                    src={Gondola}
                    alt='Hiking up Sulphur Mountain in Banff' />
                </ImgFluid>
            </ImgContainer>
        </Project>
    );
}

function ExternalLink({ href, children }) {
    return (
        <a rel='noopener noreferrer' href={href} target='_blank'>
            &nbsp;<span className='activeLink heavy'>{children}</span>
        </a>
    );
}
