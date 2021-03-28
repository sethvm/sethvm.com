import { Link }  from 'react-router-dom';

// layout imports
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';

// typography imports
import Header from '../components/Page/Header';

export default function Error() {

    const errorTxtColor = {
        color: '#A80000'
    };

    return (
        <Project>
            <Section>
                <Header type={2}>
                    <span style={errorTxtColor}>
                        404, mate - probably an old link!
                    </span>
                </Header>
                <Header type={3}>
                    <br />
                    Please don't chuck a sickie, hop over to the landing page
                    <Link to='/'>
                        &nbsp;<span className='active_link bold'>here!</span>
                    </Link>
                </Header>
            </Section>
        </Project>
    );
}
