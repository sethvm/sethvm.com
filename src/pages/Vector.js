import React from 'react';
import '../components/Project.css';

import Formula1 from '../components/vector/formula1_figma.svg';
import E5Atrium from '../components/vector/e5atrium_figma.png';
import BellX1 from '../components/vector/bell-x1_solidworks.png';
import Zonda from '../components/vector/zonda_illustrator.png';

export default function Vector() {
    
    return(
        <>
        <main className='project animated fadeIn'>
            <div className='project_body'>
                <h4><strong>VECTOR COLLECTION</strong></h4>
                <p>
                    Graphics not made for any particular project.
                    Created for de-stressing purposes.
                </p>
            </div> {/* /project-body */}
            <div className='img-fluid'>
                <img className='img-fluid_card' src={Formula1} alt='formula 1' />
                <p><br /></p>
                <img className='img-fluid_card' src={E5Atrium} alt='e5 atrium' />
            </div> {/* /img-fluid */}
            <div className='project_body'>
                <img className='project_img' src={BellX1} alt='bell x-1' />
                <p><br /></p>
                <img className='project_img' src={Zonda} alt='pagani zonda' />
            </div> {/* /project-body */}
        </main> {/* /project */}
        </>
    );
}
