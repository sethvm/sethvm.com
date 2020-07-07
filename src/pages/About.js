import React from 'react';
import '../styles/Project.css';

import Portrait from '../components/about/about-banner.png';
import ProfileLink from '../components/about/ProfileLink';
import ResumeFile from '../pdf/sethvm_resume.pdf';

export default function About() {
    
    return(
        <>
        <main className='project animated fadeIn'>
            <div className='project_body'>
                <img className='project_img' src={Portrait} alt='portrait' />
                <p>
                    <br />
                </p>
                <h4><strong>DESIGNER, ENGINEERING STUDENT</strong></h4>
                <p>
                    <br />
                    As a visual learner, the usage of illustrations and graphics to communicate has been a lifelong passion of mine.
                    I am drawn toward the fields of design and development because they allow me to extend this passion towards the
                    creation of purposeful products that encompass a user's needs beyond its visual aspects.
                    <br />
                    <br />
                    Currently in the second year of my undergraduate studies at the University of Waterloo, I am majoring in
                    the field of Systems Design Engineering (SYDE). <abbr title='Systems Design Engineering'>SYDE</abbr> is a 
                    unique department that employs the integration of knowledge across multiple Engineering disciplines.
                    I seek to develop my ability to tackle complex problems through my passion and education in order to 
                    drive positive change within the society around me.
                    <br />
                    <br />
                    Outside of class and work, I spend most of my time in the bouldering gym or the weight room. Occasionally, I'll boot
                    up a racing sim and put in a few hot laps.
                    <br />
                    <br />
                    Feel free to reach out! I'm always up for a chat about new ideas or opportunities!
                    <br />
                    <br />
                    <ProfileLink label='EMAIL' href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca' />&nbsp;&nbsp;&nbsp;
                    <ProfileLink label='RESUME' href={ResumeFile} />&nbsp;&nbsp;&nbsp;
                    <ProfileLink label='LINKEDIN' href='https://www.linkedin.com/in/sethvm' />
                </p>
            </div> {/* /project_body */}
        </main> {/* /project */}
        </>
    );
}
