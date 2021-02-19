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
import HTag4 from '../components/ProjectPage/HTag4';
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
                    <HTag4>
                        A student in Human-centered Design
                    </HTag4>
                    <Paragraph>
                        Lorem Ipsum Systems Design at Waterloo and stuff
                    </Paragraph>
                </IndentNoBar>

                <IndentNoBar>
                    <HTag4>
                        An adrenaline junkie
                    </HTag4>
                    <Paragraph>
                        Haha boulder and skydive go brrr
                    </Paragraph>
                </IndentNoBar>

                <Section>
                    <HTag3>
                        Made it this far? Don't hesitate to get in touch!
                        <br />
                    </HTag3>
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
