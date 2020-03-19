import React from 'react';

import './proj.css';
import TopShortcut from './TopShortcut';

import Formula1 from './vector/formula1_vector.svg';
import E5Atrium from './vector/e5atrium_vector.png';

export default function Vector() {
    return(
        <div class='project animated fadeIn'>
            <div class='proj_txt'>
                <h1><strong>VECTOR COLLECTION</strong></h1>
                <p>
                    <br />Figma graphics not made for any particular project.
                    Created for de-stressing purposes.
                </p>
            </div>
            <div class='img_fluid'>
                <img class='card_img' src={Formula1} alt={'formula 1'} />
                <p><br /></p>
                <img class='card_img' src={E5Atrium} alt={'e5 atrium'} />
            </div>
            <div class='proj_txt'>
                <TopShortcut />
            </div>
        </div>
    );
}
