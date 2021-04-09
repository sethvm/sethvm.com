import { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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

export default function Home() {

    pageTitle('Seth Morenos');

    return (
        <main>
            <div id='intro' className='intro'>
                <div className='intro_text animate__animated animate__fadeIn'>
                    <Heading>
                        G'day! I'm Seth.
                    </Heading>
                    <Paragraph>
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
                        <Link
                        smooth
                        to='/#projects'>
                            <div className='jump'>
                                <img
                                className='jump_arrow'
                                src={DownArrow}
                                alt='Scroll down to check out my work!' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div id='projects'>
                <Projects />
            </div>
        </main>
    );
}

function Projects() {

    // project cards to render
    const projects = [
        {
            heading: 'Order Pick History',
            subHeadings: [
                'Product',
                'Interaction Design'
            ],
            description: "Creating a streamlined order validation experience for Canada's largest grocery retailer",
            img: LoblawCard,
            alt: 'OPS Pick History',
            link: 'View case study →',
            url: '/order-pick-history'
        },
        {
            heading: 'Patient Support App',
            subHeadings: [
                'Software',
                'UX Design'
            ],
            description: "Facilitating the remote operation of a client's patient support service",
            img: SoulfxCard,
            alt: 'Patient Support App',
            link: 'View case study →',
            url: '/patient-support-app'
        },
        {
            heading: 'Employment Services Transformation',
            subHeadings: [
                'Web',
                'Service Design'
            ],
            description: "Supporting Employment Ontario's push towards improving provincial employment retention",
            img: FASSBCard,
            alt: 'Employment Services Transformation',
            link: 'View term recap →',
            url: '/employment-services-transformation'
        }
    ]

    return (
        <>
        {projects.map(project => (
            <Card
            key={uuidv4()}
            heading={project.heading}
            description={project.description}
            img={project.img}
            alt={project.alt}
            link={project.link}
            url={project.url}>
                {project.subHeadings
                &&
                project.subHeadings.map((subHeading, index, arr) => {
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
        ))}
        </>
    );
}
