import React from 'react';
import '../styles/Project.css';

import Brand from '../components/work/work_banner.svg';

export default function Work() {

    return(
        <main className='project animated fadeIn'>
            <img className='project_banner' src={Brand} alt='banner' />
            <div className='img-fluid'>
                
            </div> {/* /img-fluid */}
        </main>
    );
}
