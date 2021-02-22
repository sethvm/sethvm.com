import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

import Banner from '../components/albert/albert-banner.svg';
import ColourGuide from '../components/albert/albert-colour_guide.svg';
import ColouredLogo from '../components/albert/albert-coloured_logo.svg';
import PlainLogo from '../components/albert/albert-plain_logo.svg';

export default function Albert() {
    
    return(
        <>
        <main className='project animate__animated animate__fadeIn'>
            <img className='project_banner' src={Banner} alt='project albert' />   
            <div className='project_body'>
                <h4><span class='bold'>OVERVIEW</span></h4>
                <p>
                    Project Albert is an ongoing development of a web-based application that provides assistance to any 
                    individual looking to move to a new city. It aims to alleviate relocation stress by providing visuals of renting options,
                    commute routes to a new workplace, and available services - all within a single map.
                    <br />
                    <br />
                </p>
                <h4><span class='bold'>TEAM</span></h4>
                <p>
                    This is an independent project consisting of a developer and I (designer).
                    <br />
                    <br />
                </p>
                <h4><span class='bold'>TIMELINE</span></h4>
                <p>
                    Ongoing
                    <br />
                    <br />
                </p>
                <h4><span class='bold'>PROBLEM</span></h4>
                <p>
                    Planning a relocation to an unfamiliar city can be a daunting task. 
                    Looking through different listing sites for residence is often made more tedious by having to use 
                    different applications to obtain information regarding transit options and available services.
                    <br />
                    <br />
                    <Jumbotron className='highlight'>
                        <strong>How can we design an application that streamlines the process of evaluating residence options for
                        students and newcomers?</strong>
                    </Jumbotron>
                    <br />
                </p>
                <h4><span class='bold'>BRANDING</span></h4>
                <p>
                    With every product comes a branding identity that enables it to stand out.
                    <br />
                    <br />
                    Because Project Albert is an application that provides assistance with finding residence options,
                    I wanted to create a logo that symbolizes housing combined with some form of mapping-related visual.
                    Furthermore, I wanted this logo to be flat and easily recognizable. Our logo design takes inspiration
                    from a house highlighted with a map marker, resembling the letters A and P, respectively.
                    <br />
                    <br />
                    <div className='project_img_caption'>
                        <p>                  
                            <span class='bold italic'>Project Logo</span>
                            <br/>
                        </p>
                    </div> {/* /caption */}
                    <img className='project_img' src={PlainLogo} alt='plain logo' />
                    <img className='project_img' src={ColouredLogo} alt='coloured logo' />
                    <br />
                    <br />
                    <br />
                    <Jumbotron className='highlight'>
                        Blue represents the <strong>relief and calm</strong>
                        &nbsp;felt by prospective residents upon securing a new home, while orange embodies the <strong>warmth and security</strong>
                        &nbsp;provided by shelter. A background colour symbolizes the <strong>uncertainty</strong>
                        &nbsp;faced upon searching for a new place to live.
                    </Jumbotron>
                    <div className='project_img_caption'>
                        <p>                  
                            <span class='bold italic'>Branding Colour Guide</span>
                            <br/>
                        </p>
                    </div> {/* /caption */}
                    <img className='project_img' src={ColourGuide} alt='colour guide' />
                    <br />
                    <br />
                    <br />
                </p>
                <h4><span class='bold'>GENERATIVE RESEARCH</span></h4>
                <p>
                    To better understand the people we are building Project Albert for, we conducted a survey 
                    to obtain insight into the factors they consider and challenges they face when evaluating a potential living
                    location. Our respondents consisted of University of Waterloo <strong>students</strong> (namely
                    those studying in co-operative education streams) and <strong>newcomers from outside of
                    Canada</strong> who are new to the Greater Toronto Area (GTA).
                    <br />
                    <br/>
                    Combining the results from this survey with information gathered through secondary research involving
                    newcomers, we came across the following key findings:
                    <br />
                    <br />
                    <Jumbotron className='highlight'>
                        <span class='bold'>Both of our user groups...</span>
                            <div className='hightlight_indent'>
                                • Consider proximity to public transit as the most important factor
                                <br />
                                • Would ideally like to live close to shopping centers
                                <br />
                                • Enjoy discovering cnew cities by exploring landmarks and tourist attractions
                                <br />
                                <br />
                            </div>
                        <span class='bold'>Our students...</span>
                            <div className='hightlight_indent'>
                                • Value proximity to fitness facilities and hospitals
                                <br />
                                <br />
                            </div>
                        <span class='bold'>Our newcomers...</span>
                            <div className='hightlight_indent'>
                                • Cite language barriers as one of their greatest challenges when learning to find their way around
                            </div>
                    </Jumbotron>
                    <br />
                </p>
                <h4><span class='bold'>MOVING FORWARD</span></h4>
                <p>
                    Our next steps involve conducting an analysis of some popular mapping applications in the market. We will also begin ideating
                    how the application's layout and navigation might look visually - focus will be placed on how these could be leveraged to address
                    the findings discussed during generative research.
                </p>
            </div> {/* /project-body */}
        </main> {/* /project */}
        </>
    );
}
