import React from 'react';

import './Project.css';
import TopShortcut from './TopShortcut';

import Portrait from './about/about-banner.png';

export default function About() {
    return(
        <div class='project animated fadeIn'>
            <div class='proj_txt'>
                <img class='proj_img' src={Portrait} alt={'portrait'} />
                <p>
                    <br />
                </p>
                <h4><strong>DESIGNER, ENGINEERING STUDENT</strong></h4>
                <p>
                    <br />
                    As a visual learner, the usage of illustrations and graphics to communicate has been a lifelong passion of mine.
                    I am drawn towards the field of design because it is a discipline that allows me to extend this passion towards the
                    development of purposeful products that encompass a user's needs beyond its visual aspects.
                    <br />
                    <br />
                    Currently in the second year of my undergraduate studies at the University of Waterloo, I am majoring in
                    the field of Systems Design Engineering (SYDE). <abbr title='Systems Design Engineering'>SYDE</abbr> is a 
                    unique department that employs the integration of knowledge across multiple Engineering disciplines.
                    <br />
                    <br />
                    I seek to develop my ability to tackle complex problems through the interdisciplinary approach employed by
                    design and <abbr title='Systems Design Engineering'>SYDE</abbr> in order to drive positive change within the 
                    society around me.
                    <br />
                    <br />
                    Outside of class and design, you'll often find me in a bouldering gym, weight room or driving in my sim rig.
                    Sometimes I also draw and create vector artwork.
                </p>
            </div>
            <div class='proj_txt'>
                <TopShortcut />
            </div>
        </div>
    );
}
