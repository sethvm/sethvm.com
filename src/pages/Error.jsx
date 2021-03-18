import { Link }  from 'react-router-dom';

// layout imports
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';

// typography imports
import HTag2 from '../components/Page/HTag2';
import HTag3 from '../components/Page/HTag3';

export default function Error() {

    const errorTxtColor = {
        color: '#800000'
    };

    return (
        <main>
            <Project>
                <Section>
                    <HTag2>
                        <span style={errorTxtColor}>
                            404, mate - probably an old link!
                        </span>
                        <br />
                    </HTag2>
                    <HTag3>
                        Please don't chuck a sickie, hop over to the landing page
                        <Link to='/'>
                            &nbsp;<span className='active_link bold'>here!</span>
                        </Link>
                    </HTag3>
                </Section>
            </Project>
        </main>
    );
}
