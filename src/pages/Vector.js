import React from 'react';
import '../styles/Project.css';

import Formula1 from '../components/vector/formula1_figma.svg';
import BellX1 from '../components/vector/bell-x1_solidworks.png';
import E5Atrium from '../components/vector/e5atrium_figma.png';
import Fish from '../components/vector/skeletal-fish_figma.svg';
import PersonalLogo from '../components/vector/personal-logo_figma.svg';
import Zonda from '../components/vector/zonda_illustrator.png';

export default function Vector() {
    
    return(
        <>
        <main className='project animated fadeIn'>
            <div className='project_body'>
                <h4><strong>VISUAL COLLECTION</strong></h4>
                <p>
                    Designs and graphics not made for any particular project.
                </p>
                <p><br /></p>
                <img className='project_img' src={PersonalLogo} alt='Personal Logo (Figma)' />
            </div> {/* /project-body */}
            <div className='img-fluid'>
                <img className='img-fluid_card' src={Formula1} alt='Formula 1 (Figma)' />
                <p><br /></p>
                <img className='img-fluid_card' src={E5Atrium} alt='E5 Atrium' />
            </div> {/* /img-fluid */}
            <div className='project_body'>
                <img className='project_img' src={BellX1} alt='Bell X-1 (SolidWorks)' />
                <p><br /></p>
                <img className='project_img' src={Fish} alt='Fish (Figma)' />
                <p><br /></p>
                <img className='project_img' src={Zonda} alt='Pagani Zonda (Adobe Illustrator)' />
            </div> {/* /project-body */}
        </main> {/* /project */}
        </>
    );
}
