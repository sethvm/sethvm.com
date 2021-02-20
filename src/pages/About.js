import React from 'react';

/*layout imports*/
import Project from '../components/ProjectPage/Project';
import Section from '../components/ProjectPage/Section';
import IndentNoBar from '../components/ProjectPage/IndentNoBar';

/*image container imports*/
import ImgContainer from '../components/ProjectPage/ImgContainer';
import ImgFluid from '../components/ProjectPage/ImgFluid';
import ImgCaption from '../components/ProjectPage/ImgCaption';

/*typography imports*/
import HTag2 from '../components/ProjectPage/HTag2';
import HTag3 from '../components/ProjectPage/HTag3';
import Paragraph from '../components/ProjectPage/Paragraph';

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
                        Lorem Ipsum Systems Design at Waterloo and stuff
                    </Paragraph>
                </IndentNoBar>

                <IndentNoBar>
                    <HTag3>
                        An adrenaline junkie
                    </HTag3>
                    <Paragraph>
                        Haha boulder and skydive go brrr
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
