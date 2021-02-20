import React from 'react';
import { Link }  from 'react-router-dom';
import '../styles/Error.css';

/*layout imports*/
import Project from '../components/ProjectPage/Project';
import Section from '../components/ProjectPage/Section';

/*typography imports*/
import HTag2 from '../components/ProjectPage/HTag2';
import HTag3 from '../components/ProjectPage/HTag3';
import HTag4 from '../components/ProjectPage/HTag4';

export default function Error() {
    return (
        <main>
            <Project>
                <Section>
                    <HTag2>
                        <span className='warning'>
                            404, mate. Probably an old link!
                        </span>
                        <br />
                    </HTag2>
                    <HTag3>
                        Head over to the landing page
                        <Link to='/'>
                            &nbsp;<span className='big_link bold'>here!</span>
                        </Link>
                        <br />
                    </HTag3>
                </Section>
            </Project>
        </main>
    );
}
