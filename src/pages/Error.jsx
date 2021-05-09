import { Link }  from 'react-router-dom';

// page title
import { pageTitle } from '../components/Page/pageTitle';

// layout imports
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';

// typography imports
import Heading from '../components/Typography/Heading';

export default function Error() {

    pageTitle('404 - Not Found');
    
    return (
        <Project>
            <Section>
                <Heading type={2}>
                    <span className='heavy' style={{ color: '#A80000' }}>
                        404, mate - probably an old link!
                    </span>
                </Heading>
                <Heading type={3}>
                    <br />
                    <span className='bold'>
                        Please don't chuck a sickie, hop over to the landing page
                    </span>
                    <Link to='/'>
                        &nbsp;<span className='activeLink heavy'>here!</span>
                    </Link>
                </Heading>
            </Section>
        </Project>
    );
}
