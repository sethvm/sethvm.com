import React from 'react';

/*layout imports*/
import Project from '../components/ProjectPage/Project';
import Section from '../components/ProjectPage/Section';
/*import SectionInner from '../components/ProjectPage/SectionInner';
import Indent from '../components/ProjectPage/Indent';
import IndentInner from '../components/ProjectPage/IndentInner';*/

/*typography imports*/
import HTag2 from '../components/ProjectPage/HTag2';
/*import HTag4 from '../components/ProjectPage/HTag4';
import HTag5 from '../components/ProjectPage/HTag5';*/
import Paragraph from '../components/ProjectPage/Paragraph';
import Banner from '../components/ProjectPage/Banner';

/*banner import*/
import OngoingCard from '../components/ProjectPage/wip-card.svg';

export default function TRX() {
    return (
        <main>
            <Project>
                <Section>
                    <HTag2>OPS Transaction Logs (TRX)</HTag2>
                    <Paragraph>
                        TRX is a transaction log module situated within Loblaw's
                        OPS Portal, a centralized platform that enables area managers and
                        store employees to manage their days. It is used to troubleshoot
                        orders as well as validate order completion times.
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Company:</span>
                        &nbsp;Loblaw Digital
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Team:</span>
                        &nbsp;2 Designers (including myself), Product Manager
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Timeline:</span>
                        &nbsp;Ongoing
                    </Paragraph>
                    <Paragraph>
                        <span className='bold'>Tools:</span>
                        &nbsp;Figma
                    </Paragraph>
                </Section>

                <Banner
                img={OngoingCard}
                alt='Ongoing project. Reach out for more details' />
                
            </Project>
        </main>
    );
}
