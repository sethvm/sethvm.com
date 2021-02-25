import React from 'react';

/*layout imports*/
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
import IndentNoBar from '../components/Page/IndentNoBar';

/*image container imports*/
import ImgContainer from '../components/Page/ImgContainer';
import ImgFluid from '../components/Page/ImgFluid';
import ImgCaption from '../components/Page/ImgCaption';

/*typography imports*/
import HTag2 from '../components/Page/HTag2';
import HTag3 from '../components/Page/HTag3';
import Paragraph from '../components/Page/Paragraph';

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
                        My journey through the field of design revolves around the objective of
                        improving the quality of life for others. I'm currently
                        exploring problem spaces within healthcare, food retail and e-commerce
                        - essential industries that are facing never-before-seen challenges
                        in light of the COVID-19 pandemic.
                    </Paragraph>
                    <Paragraph>
                        I'm also a Systems Design Engineering (SYDE) undergraduate at the University
                        of Waterloo. SYDE is a unique program that emphasizes the utilization of
                        multi-disciplinary approaches to taking on problems faced by today's society
                        - all with the user at the forefront.
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
                        or hiking up a mountain. Occasionally, I enjoy diving head-first into
                        clouds - with a parachute strapped to my back, of course.
                    </Paragraph>
                </IndentNoBar>

                <IndentNoBar>
                    <HTag3>
                        An avid baker
                    </HTag3>
                    <Paragraph>
                        I took a gap year to work full-time as a baker and continue to hone
                        my craft.
                    </Paragraph>
                </IndentNoBar>

                <Section>
                    <HTag2>
                        Down to work together?
                        Let's get in touch!
                        <br />
                    </HTag2>
                </Section>
                <ImgContainer>
                    <ImgFluid>
                        [portraits go here]
                    </ImgFluid>
                    <ImgCaption>
                        haha hiking and skydive go brr
                    </ImgCaption>
                </ImgContainer>
            </Project>
        </main>
    );
}
