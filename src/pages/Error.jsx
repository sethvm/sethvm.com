import { Link }  from 'react-router-dom';

// page title
import pageTitle from '../components/Page/pageTitle';

// layout imports
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';

// typography imports
import Heading from '../components/Typography/Heading';

export default function Error() {

    pageTitle('404 Error');

    const colorRed = {
        color: '#A80000'
    };

    return (
        <Project>
            <Section>
                <Heading type={2}>
                    <span style={colorRed}>
                        404, mate - probably an old link!
                    </span>
                </Heading>
                <Heading type={3}>
                    <br />
                    Please don't chuck a sickie, hop over to the landing page
                    <Link to='/'>
                        &nbsp;<span className='active-link bold'>here!</span>
                    </Link>
                </Heading>
            </Section>
        </Project>
    );
}
