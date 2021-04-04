import { Fragment } from 'react';
import { HashLink } from 'react-router-hash-link';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Home.css';

// page title
import pageTitle from '../components/Page/pageTitle';

// components
import Card from '../components/Card/Card';
import DownArrow from '../components/Navigation/down-arrow.svg';

// typography
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';

// card imgs
import LoblawCard from '../assets/loblaw/loblaw-card.svg';
import SoulfxCard from '../assets/soulfx/soulfx-card.svg';
import FASSBCard from '../assets/fassb/fassb-card.svg';

function Projects() {

    // project cards to render
    const projects = [
        {
            heading: 'OPS Transaction Logs',
            subHeadings: [
                'Product Design',
            ],
            description: "Streamlining an order validation experience for an internal-facing tool used by Canada's largest grocery retailer",
            img: LoblawCard,
            alt: 'OPS Transaction Logs',
            url: '/ops-transaction-logs',
            link: 'View case study →'
        },
        {
            heading: 'Patient Support App',
            subHeadings: [
                'UX Design',
                'Info Architecture'
            ],
            description: "Facilitating the remote delivery of a client's financial aid service for patients in need",
            img: SoulfxCard,
            alt: 'Patient Support App',
            url: '/patient-support-app',
            link: 'View case study →'
        },
        {
            heading: 'Employment Services Transformation',
            subHeadings: [
                'Web Design',
                'Service Design'
            ],
            description: "Reworking interfaces and experiences for services delivered by Employment Ontario to help jobseekers secure employment",
            img: FASSBCard,
            alt: 'Employment Services Transformation',
            url: '/employment-services-transformation',
            link: 'View term recap →'
        }
    ]
    return projects;
}

export default function Home() {

    pageTitle('Seth Morenos');

    const renderProjects = Projects().map(project => (
        <Card
        key={uuidv4()}
        heading={project.heading}
        description={project.description}
        img={project.img}
        alt={project.alt}
        link={project.link}
        url={project.url}>
            {project.subHeadings && project.subHeadings.map((subHeading, index, arr) => {
                if (index !== (arr.length - 1)) {
                    return (
                        <Fragment key={uuidv4()}>
                            <SubHeading>{subHeading}</SubHeading>&nbsp;/&nbsp;
                        </Fragment>
                    );
                }
                return <SubHeading key={uuidv4()}>{subHeading}</SubHeading>
            })}
        </Card>
    ))

    return (
        <main>
            <div id='intro' className='intro'>
                <div className='intro_text animate__animated animate__fadeIn'>
                    <Heading>
                        G'day! I'm Seth.
                    </Heading>
                    <Paragraph>
                        <br />
                        A <strong>designer</strong> pursuing a degree
                        in <strong>Systems Design Engineering</strong> -
                        passionate about creating products that
                        help <strong>move the world forward</strong>.
                    </Paragraph>
                </div>
                <div className='intro_experience animate__animated animate__fadeIn'>
                    <Paragraph>
                        Currently focusing on 
                        <strong>&nbsp;online fulfillment</strong> initiatives at Loblaw Digital
                        <br />
                        <br />
                    </Paragraph>
                    <div className='jump_container animate__animated animate__fadeInDown animate__delay-1s'>
                        <HashLink smooth to='#projects'>
                            <div className='jump'>
                                <img
                                className='jump_arrow'
                                src={DownArrow}
                                alt='Scroll down to check out my work!' />
                            </div>
                        </HashLink>
                    </div>
                </div>
            </div>
            <div id='projects'>
                {renderProjects}
            </div>
        </main>
    );
}
