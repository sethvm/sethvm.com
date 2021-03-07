import React from 'react';

// layout imports
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
import IndentNoBar from '../components/Page/IndentNoBar';

// image container imports
import ImgContainer from '../components/Page/ImgContainer';
import ImgFluid from '../components/Page/ImgFluid';
import Img from '../components/Page/Img';

// typography imports
import HTag2 from '../components/Page/HTag2';
import HTag3 from '../components/Page/HTag3';
import Paragraph from '../components/Page/Paragraph';

// file imports
import ResumeFile from '../pdf/sethvm_resume.pdf';

// img imports
import Gondola from '../components/about/gondola.jpg';
import SkyDive from '../components/about/skydive.jpg';

export default function About() {
    return (
        <main>
            <Project>

                <Section>
                    <HTag2>
                        Thanks for dropping by! I am...
                    </HTag2>
                </Section>

                <IndentNoBar>
                    <HTag3>
                        A student in Human-centered Design
                    </HTag3>
                    <Paragraph>
                        I'm a Systems Design Engineering (SYDE) undergrad at the University of Waterloo.
                        SYDE is a unique program that emphasizes the utilization of multi-disciplinary
                        approaches to tackling technological and socioeconomical problems we face today -
                        all with users at the forefront.
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
                    <HTag3>
                        An adrenaline junkie
                    </HTag3>
                    <Paragraph>
                        Should you ever need to find me outside of school and work, there's a
                        good chance I'll be working on dynos at the bouldering gym,
                        standing in line to board the fastest roller coaster at the park
                        or hiking up a mountain somewhere. Occasionally, I enjoy diving head-first into
                        clouds - with a parachute strapped to my back, of course.
                    </Paragraph>
                </IndentNoBar>

                <IndentNoBar>
                    <HTag3>
                        An avid baker
                    </HTag3>
                    <Paragraph>
                        Having worked full-time as a baker prior to university,
                        I also spend time keeping my pastry craft sharp. Lately, I've been working towards
                        perfecting my soufflé texture.
                    </Paragraph>
                </IndentNoBar>

                <Section>
                    <HTag2>
                        Keen to collab?
                        Let's get in touch!
                        <br />
                    </HTag2>
                    <HTag3>
                        Say hi on
                        <ExtLink
                        href='https://www.linkedin.com/in/sethvm'>
                            LinkedIn
                        </ExtLink>
                        <br />
                    </HTag3>
                    <HTag3>
                        Toss over an
                        <ExtLink
                        href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'>
                            email
                        </ExtLink>
                        <br />
                    </HTag3>
                    <HTag3>
                        Running late to a meeting? Grab a
                        <ExtLink
                        href={ResumeFile}>
                            tl;dr
                        </ExtLink> of my experience
                    </HTag3>
                </Section>

                <ImgContainer clear>
                    <ImgFluid>
                        <Img src={Gondola}
                        alt='Hiking up Sulphur Mountain in Banff' />
                        <Img src={SkyDive}
                        alt='Skydiving at Hamilton' />
                    </ImgFluid>
                </ImgContainer>
                
            </Project>
        </main>
    );
}

function ExtLink(props) {
    return (
        <a rel='noopener noreferrer' href={props.href} target='_blank'>
            &nbsp;<span className='active_link'>{props.children}</span>
        </a>
    );
}
