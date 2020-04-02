import React from 'react';

import './Project.css';

import Formula1 from './vector/formula1_vector.svg';
import E5Atrium from './vector/e5atrium_vector.png';
import DInamics from './vector/di-namics_vector.svg';

export default function Vector() {
    return(
        <div className='project animated fadeIn'>
            <div className='body'>
                <h4><strong>VECTOR COLLECTION</strong></h4>
                <p>
                    Graphics not made for any particular project.
                    Created for de-stressing purposes.
                </p>
            </div>
            <div className='img_fluid'>
                <img className='card_img' src={Formula1} alt='formula 1' />
                <p><br /></p>
                <img className='card_img' src={E5Atrium} alt='e5 atrium' />
            </div>
            <div className='body'>
                <img className='proj_img' src={DInamics} alt='di-namics' />
            </div>
        </div>
    );
}
