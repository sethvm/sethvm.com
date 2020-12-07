import React from 'react';
import '../styles/Project.css';

import Formula1 from '../components/visuals/formula1_figma.svg';
import BellX1 from '../components/visuals/bell-x1_solidworks.jpg';
import E5Atrium from '../components/visuals/e5atrium_figma.jpg';
import Fish from '../components/visuals/skeletal-fish_figma.svg';
import Zonda from '../components/visuals/zonda_illustrator.jpg';

export default function Visuals() {
    
    return(
        <>
        <main className='project animate__animated animate__fadeIn'>
            <div className='project_body'>
                <h4><strong>VISUALS</strong></h4>
                <p>
                    A collection of miscellaneous designs and graphics.
                </p>
                <p><br /></p>
                <img className='project_img' src={Fish} alt='Fish (Figma)' />
            </div> {/* /project-body */}
            <div className='img-fluid'>
                <img className='img-fluid_card' src={Formula1} alt='Formula 1 (Figma)' />
                <p><br /></p>
                <img className='img-fluid_card' src={E5Atrium} alt='E5 Atrium' />
            </div> {/* /img-fluid */}
            <div className='project_body'>
                <img className='project_img' src={BellX1} alt='Bell X-1 (SolidWorks)' />
                <p><br /></p>
                <img className='project_img' src={Zonda} alt='Pagani Zonda (Adobe Illustrator)' />
            </div> {/* /project-body */}
        </main> {/* /project */}
        </>
    );
}
