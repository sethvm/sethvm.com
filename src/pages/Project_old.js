import React from 'react';
import '../styles/NewProject.css';

import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
import SectionInner from '../components/Page/SectionInner';
import Paragraph from '../components/Page/Paragraph';

import Banner from '../components/Page/Banner';
import ImgContainer from '../components/Page/ImgContainer';
import ImgFluid from '../components/Page/ImgFluid';

import HTag2 from '../components/Page/HTag2';
import HTag4 from '../components/Page/HTag4';

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
                    <HTag4>The Health Crisis</HTag4>
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
                        <HTag4>The approach</HTag4>
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