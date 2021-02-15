import React from 'react';
import '../styles/NewProject.css';

import Project from '../components/ProjectPage/Project';
import Section from '../components/ProjectPage/Section';
import SectionInner from '../components/ProjectPage/SectionInner';
import Paragraph from '../components/ProjectPage/Paragraph';

import Banner from '../components/ProjectPage/Banner';
import ImgContainer from '../components/ProjectPage/ImgContainer';
import ImgFluid from '../components/ProjectPage/ImgFluid';

import HTag2 from '../components/ProjectPage/HTag2';
import HTag4 from '../components/ProjectPage/HTag4';

export default function NewProject() {
    
    return(
        <main>
            <Project>
                <Section>
                    <HTag2>
                        Project Title
                    </HTag2>
                    <Paragraph>
                        This is a pagagraph explaining an overview of the project.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eligendi non quis exercitationem culpa nesciunt nihil aut
                        nostrum explicabo reprehenderit optio amet ab temporibus
                        asperiores quasi cupiditate. Voluptatum ducimus voluptates
                        voluptas?
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Team:</span>&nbsp;
                        2 Designers (including myself), Product Manager, OPS Portal Tech Team
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Timeline:</span>&nbsp;
                        May 2020 - Aug 2020 (10 weeks)
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Tools:</span>&nbsp;
                        Figma, Adobe XD
                    </Paragraph>
                </Section>
                <Banner>
                    banner div 
                </Banner>
                <Section>
                    <HTag4>
                        <span className='bold'>Paragraph header</span>
                    </HTag4>
                    <Paragraph>
                        This is a pagagraph explaining a given phase of the project.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eligendi non quis exercitationem culpa nesciunt nihil aut
                        nostrum explicabo reprehenderit optio amet ab temporibus
                        asperiores quasi cupiditate. Voluptatum ducimus voluptates
                        voluptas?
                    </Paragraph>
                    <Paragraph>
                        <strong>• We highlight important questions asked using strong tags</strong>
                    </Paragraph>
                    <Paragraph>
                        <strong>• Or do we?</strong>
                    </Paragraph>
                    <Paragraph>
                        <strong>• But actually though?</strong>
                    </Paragraph>
                </Section>
                <ImgContainer
                caption='image caption goes here'>
                    <ImgFluid>
                        <div>evenly</div>
                        <div>spaced</div>
                        <div>flexbox</div>
                    </ImgFluid>
                </ImgContainer>
                <ImgContainer
                caption='another caption here'>
                    <SectionInner>
                        <HTag4>
                            <span className='bold'>The approach</span>
                        </HTag4>
                        <Paragraph>
                            Sometimes, we might even opt to combine the text section and an image
                            into a single container...
                        </Paragraph>
                    </SectionInner>
                    <ImgFluid>
                        <div>images</div>
                        <div>go</div>
                        <div>here</div>
                    </ImgFluid>
                </ImgContainer>
            </Project>
        </main>
    );
}
