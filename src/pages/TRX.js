import React from 'react';

/*layout imports*/
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
/*import SectionInner from '../components/Page/SectionInner';
import Indent from '../components/Page/Indent';
import IndentInner from '../components/Page/IndentInner';*/

/*typography imports*/
import HTag2 from '../components/Page/HTag2';
/*import HTag4 from '../components/Page/HTag4';
import HTag5 from '../components/Page/HTag5';*/
import Paragraph from '../components/Page/Paragraph';
import Banner from '../components/Page/Banner';

/*banner import*/
import OngoingCard from '../components/Page/wip-card.svg';

export default function TRX() {
    return (
        <main>
            <Project>
                <Section>
                    <HTag2>OPS Transaction Logs (TRX)</HTag2>
                    <Paragraph>
                        Transaction logs (collectively referred to as TRX) are modules situated within Loblaw's
                        OPS Portal, a centralized platform that enables area managers and
                        store employees to manage their days. They are used to troubleshoot
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
