import React from 'react';
import '../components/Project.css';

import PageHeader from '../components/Header/PageHeader';
import SideBar from '../components/SideBar/SideBar';
import TopShortcut from '../components/TopShortcut/TopShortcut';
import PageContent from './PageContainer';
import PageFooter from '../components/Footer/PageFooter';

import Portrait from '../components/about/about-banner.png';
import ContactInfo from '../components/about/ContactInfo';

export default function About() {
    
    return(
        <>
        <PageHeader />
        <PageContent>
            <div className='project animated fadeIn'>
                <div className='project_body'>
                    <img className='project_img' src={Portrait} alt='portrait' />
                    <p>
                        <br />
                    </p>
                    <h4><strong>DESIGNER, ENGINEERING STUDENT</strong></h4>
                    <p>
                        <br />
                        As a visual learner, the usage of illustrations and graphics to communicate has been a lifelong passion of mine.
                        I am drawn toward the fields of design and frontend development because they allow me to extend this passion towards the
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
                        Outside of class and work, you'll often find me in a bouldering gym, weight room or driving in my sim rig.
                        Sometimes I also draw and create vector artwork.
                        <br />
                        <br />
                        Feel free to reach out! I'm always up for a chat about new ideas or opportunities!
                        <br />
                        <br />
                        <ContactInfo />
                    </p>
                </div> {/* /project_body */}
            </div> {/* /project */}
        </PageContent>
        <TopShortcut />
        <SideBar />
        <PageFooter />
        </>
    );
}
