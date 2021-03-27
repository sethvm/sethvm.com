import { Link }  from 'react-router-dom';

// layout imports
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';

// typography imports
import Header from '../components/Page/Header';

export default function Error() {

    const errorTxtColor = {
        color: '#800000'
    };

    return (
        <main>
            <Project>
                <Section>
                    <Header type={2}>
                        <span style={errorTxtColor}>
                            404, mate - probably an old link!
                        </span>
                        <br />
                    </Header>
                    <Header type={3}>
                        Please don't chuck a sickie, hop over to the landing page
                        <Link to='/'>
                            &nbsp;<span className='active_link bold'>here!</span>
                        </Link>
                    </Header>
                </Section>
            </Project>
        </main>
    );
}
