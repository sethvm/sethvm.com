// used as page body loading state
import { useLocation } from 'react-router-dom';
import './LoadingBody.css';

// component imports
import Section from '../Page/Section';
import LoadingIcon from './LoadingIcon';

export default function RenderLoadingBody() {

    const userOnHomePage = (useLocation().pathname === '/');

    return (
        <>
        {userOnHomePage
            ? <LoadingBody variant='loading-home' />
            : <LoadingBody variant='loading-page' />
        }
        </>
    );

}

function LoadingBody({ variant }) {
    return (
        <main>
            <div className={variant}>
                <Section>
                    <LoadingIcon />
                    <h2>
                        <div className='loading-msg'>
                            to-do: insert witty loading message
                        </div>
                    </h2>
                </Section>
            </div>
        </main>
    );
}
