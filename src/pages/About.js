import React from 'react';

/*layout imports*/
import Project from '../components/ProjectPage/Project';
import Section from '../components/ProjectPage/Section';
import SectionInner from '../components/ProjectPage/SectionInner';
import Indent from '../components/ProjectPage/Indent';
import IndentInner from '../components/ProjectPage/IndentInner';

/*image container imports*/
import Banner from '../components/ProjectPage/Banner';
import ImgContainer from '../components/ProjectPage/ImgContainer';
import ImgFluid from '../components/ProjectPage/ImgFluid';
import ImgCaption from '../components/ProjectPage/ImgCaption';

/*typography imports*/
import HTag2 from '../components/ProjectPage/HTag2';
import HTag3 from '../components/ProjectPage/HTag3';
import HTag4 from '../components/ProjectPage/HTag4';
import HTag5 from '../components/ProjectPage/HTag5';
import Paragraph from '../components/ProjectPage/Paragraph';

export default function About() {
    return (
        <main>
            <Project>
                <Section>
                    <HTag2>
                        Thanks for dropping by! I am...
                        <br />
                    </HTag2>
                    <SectionInner>
                        <HTag4>
                            A student in Human-centered Design
                        </HTag4>
                        <Paragraph>
                            Lorem Ipsum Systems Design at Waterloo and stuff
                        </Paragraph>
                    </SectionInner>
                    <SectionInner>
                        <HTag4>
                            <br />
                            An adrenaline junkie
                        </HTag4>
                        <Paragraph>
                            Haha boulder and skydive go brrr
                        </Paragraph>
                    </SectionInner>
                </Section>
                <Section>
                    <HTag3>
                        Made it this far? Don't hesitate to get in touch!
                        <br />
                    </HTag3>
                </Section>
                <ImgContainer>
                    <ImgFluid>

                    </ImgFluid>
                    <ImgCaption>
                        haha hiking and skydive go brr
                    </ImgCaption>
                </ImgContainer>
            </Project>
        </main>
    );
}
