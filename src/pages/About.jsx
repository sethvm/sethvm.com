// layout imports
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
import IndentNoBar from '../components/Page/IndentNoBar';

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
import Gondola from '../assets/about/gondola.jpg';
import SkyDive from '../assets/about/skydive.jpg';

export default function About() {
    return (
        <Project>
            <Section>
                <Heading type={2}>
                    Thanks for dropping by! I am...
                </Heading>
            </Section>

            <IndentNoBar>
                <Heading type={3}>
                    A student in Human-centered Design
                </Heading>
                <Paragraph>
                    I'm a Systems Design Engineering (SYDE) undergrad at the University of Waterloo.
                    SYDE is a unique program that emphasizes the utilization of multi-disciplinary
                    approaches to tackling technological and socioeconomical problems we face today -
                    all with users at the forefront. As a SYDE student, my work centers around examining
                    how we humans interact with the technology around us.
                </Paragraph>
                <Paragraph>
                    My endeavours in design revolve around the objective of
                    improving the quality of life for others.
                    I'm currently exploring the never-before-seen challenges being brought by
                    COVID-19 to our essential industries - my spaces of interest
                    include <strong>healthcare</strong>, <strong>e-commerce</strong> and <strong>tech</strong>.
                </Paragraph>
            </IndentNoBar>

            <IndentNoBar>
                <Heading type={3}>
                    An adrenaline junkie
                </Heading>
                <Paragraph>
                    Should you ever need to find me outside of school and work, there's a
                    good chance I'll be working on dynos at the bouldering gym,
                    amping up for deadlifts in the weight room,
                    or hiking up a mountain somewhere. Occasionally, I enjoy diving head-first into
                    clouds - with a parachute strapped to my back, of course.
                </Paragraph>
            </IndentNoBar>

            <IndentNoBar>
                <Heading type={3}>
                    An avid baker
                </Heading>
                <Paragraph>
                    Having worked full-time as a baker prior to university,
                    I also spend time keeping my pastry craft sharp. Lately, I've been working towards
                    perfecting my soufflé texture.
                </Paragraph>
            </IndentNoBar>

            <Section>
                <Heading type ={2}>
                    Keen to collab?
                    Let's get in touch!
                    <br />
                    <br />
                </Heading>
                <Heading type ={3}>
                    Say hi on
                    <ExtLink
                    href='https://www.linkedin.com/in/sethvm'>
                        LinkedIn
                    </ExtLink>
                    <br />
                    <br />
                </Heading>
                <Heading type={3}>
                    Toss over an
                    <ExtLink
                    href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'>
                        email
                    </ExtLink>
                    <br />
                    <br />
                </Heading>
                <Heading type={3}>
                    Running late to a meeting? Grab a
                    <ExtLink
                    href={ResumeFile}>
                        tl;dr
                    </ExtLink> of my experience
                </Heading>
            </Section>

            <ImgContainer clear>
                <ImgFluid>
                    <Img item
                    src={Gondola}
                    alt='Hiking up Sulphur Mountain in Banff' />
                    <Img item
                    src={SkyDive}
                    alt='Skydiving at Hamilton' />
                </ImgFluid>
            </ImgContainer>           
        </Project>
    );
}

function ExtLink({ href, children }) {
    return (
        <a rel='noopener noreferrer' href={href} target='_blank'>
            &nbsp;<span className='active_link'>{children}</span>
        </a>
    );
}
