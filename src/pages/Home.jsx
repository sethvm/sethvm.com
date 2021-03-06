import {
    memo,
    Fragment
} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Home.css';

// page title
import { pageTitle } from '../components/Page/pageTitle';

// components
import DownArrow from '../components/Navigation/down-arrow.svg';

// typography
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';

// projects
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { projectData } from '../projects/projectData';

export default function Home() {

    pageTitle('Seth Morenos');

    return (
        <main>
            <div id='intro' className='intro'>
                <div className='introText animate__animated animate__fadeIn'>
                    <Heading>
                        G'day! I'm Seth.
                    </Heading>
                    <Paragraph>
                        A <span className='heavy'>designer</span> pursuing a degree
                        in <span className='heavy'>Systems Design Engineering</span> -
                        passionate about creating products that
                        help <span className='heavy'>move the world forward</span>.
                    </Paragraph>
                </div>
                <div className='introExperience animate__animated animate__fadeIn'>
                    <Paragraph>
                        Most recently, I designed for
                        <span className='heavy'>&nbsp;PC Express fulfillment</span> at Loblaw Digital.
                        <br />
                        <br />
                    </Paragraph>
                    <div className='jumpContainer animate__animated animate__fadeInDown animate__delay-1s'>
                        <Link
                        smooth
                        to='/#projects'>
                            <div className='jump'>
                                <img
                                className='jumpBtn'
                                src={DownArrow}
                                alt='Scroll down to check out my work!' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div id='projects'>
                <MemoizedProjects />
            </div>
        </main>
    );
}

const MemoizedProjects = memo(() => {

    return (
        <>
        {projectData.map(project => (
            <ProjectCard
            key={uuidv4()}
            heading={project.heading}
            description={project.description}
            img={project.img}
            alt={project.alt}
            link={project.cardLink}
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
            </ProjectCard>
        ))}
        </>
    );
})
