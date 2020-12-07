import React from 'react';
import '../styles/Project.css';

import Gondola from '../components/about/gondola.jpg';
import ProfileLink from '../components/about/ProfileLink';
import ResumeFile from '../pdf/sethvm_resume.pdf';
import SkyDive from '../components/about/skydive.jpg';

export default function About() {
    
    return(
        <>
        <main className='project animate__animated animate__fadeIn'>
            <div className='project_body'>
                <h4><strong>DESIGNER - ENGINEERING STUDENT - ADRENALINE JUNKIE</strong></h4>
                <p>
                    <br />
                    As a visual learner, the usage of illustrations and graphics to communicate has been a lifelong passion of mine.
                    I am drawn toward the fields of design and development by the opportunity to extend this passion towards crafting
                    products and experiences that make life easier for others.
                    <br />
                    <br />
                    Currently an undergraduate student at the University of Waterloo, I am majoring in
                    the field of Systems Design Engineering (SYDE). <abbr title='Systems Design Engineering'>SYDE</abbr> is a 
                    unique department that employs the integration of knowledge across multiple Engineering disciplines.
                    I seek to develop my ability to tackle complex problems through my passion and education in order to 
                    drive positive change within the society around me.
                    <br />
                    <br />
                    Outside of design and school, I spend most of my time in the bouldering gym, standing in line to board a roller coaster
                    or learning to cook a new dish. Occasionally, I enjoy jumping out of flying aircraft - with a parachute, of course.
                    <br />
                    <br />
                    Made it this far into my introduction? Don't hesitate to get in touch!
                    <br />
                    <br />
                    <ProfileLink label='LINKEDIN' href='https://www.linkedin.com/in/sethvm' />&nbsp;&nbsp;&nbsp;
                    <ProfileLink label='EMAIL' href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca' />&nbsp;&nbsp;&nbsp;
                    <ProfileLink label='RESUME' href={ResumeFile} />
                    <br />
                    <br />
                    <hr />
                </p>
            </div> {/* /project_body */}
            <div className='img-fluid'>
                <img className='img-fluid_card' src={Gondola} alt='Sulphur Mountain Trail' />
                <p><br /></p>
                <img className='img-fluid_card' src={SkyDive} alt='I sometimes skydive' />
                <p><br /></p>
            </div> {/* /img-fluid */}
        </main> {/* /project */}
        </>
    );
}
