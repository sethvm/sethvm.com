// used as page body loading state
import React from 'react';
import './LoadingBody.css';

// component imports
import Project from '../Page/Project';
import Section from '../Page/Section';
import LoadingIcon from './LoadingIcon';

// typography imports
import HTag2 from '../Page/HTag2';

export default function LoadingBody() {
    return (
        <main>
            <Project>
                <div className='loading-body'>
                    <Section>
                        <LoadingIcon />
                        <HTag2>
                            <span className='loading-blurb'>
                                Tu meke! You've got content coming in a split-sec...
                            </span>
                        </HTag2>   
                    </Section>
                </div>
            </Project>
        </main>
    );
}
