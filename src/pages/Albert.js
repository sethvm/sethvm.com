import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../styles/Project.css';

import Banner from '../components/albert/albert-banner.svg';
import ColourGuide from '../components/albert/albert-colour_guide.svg';
import ColouredLogo from '../components/albert/albert-coloured_logo.svg';
import PlainLogo from '../components/albert/albert-plain_logo.svg';

export default function Albert() {
    
    return(
        <>
        <main className='project animated fadeIn'>
            <img className='project_banner' src={Banner} alt='project albert' />   
            <div className='project_body'>
                <h4><strong>OVERVIEW</strong></h4>
                <p>
                    Project Albert is an ongoing development of a web-based application that provides assistance to any 
                    individual looking to move to a new city for employment.
                    It aims to alleviate relocation stress by providing visuals of renting options,
                    commute routes to their new workplace, and available services - all within a single map.
                    <br />
                    <br />
                </p>
                <h4><strong>TEAM</strong></h4>
                <p>
                    This is an independent project consisting of a developer and I (designer).
                    <br />
                    <br />
                </p>
                <h4><strong>TIMELINE</strong></h4>
                <p>
                    Ongoing
                    <br />
                    <br />
                </p>
                <h4><strong>PROBLEM</strong></h4>
                <p>
                    Planning a relocation to an unfamiliar city for work can be a daunting task. 
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
                <h4><strong>BRANDING</strong></h4>
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
                            <em><strong>Project Logo</strong></em>
                            <br/>
                        </p>
                    </div> {/* /caption */}
                    <img className='project_img' src={PlainLogo} alt='plain logo' />
                    <img className='project_img' src={ColouredLogo} alt='coloured logo' />
                    <br />
                    <br />
                    <br />
                    Our branding colour palette was created following Google's Material design guidelines. Blue represents the <strong>relief and calm</strong>
                    &nbsp;felt by prospective residents upon securing a new home, while orange embodies the <strong>warmth and security</strong>
                    &nbsp;provided by shelter. A background colour symbolizes the <strong>uncertainty</strong>
                    &nbsp;faced upon searching for a new place to live.
                    <br />
                    <br />
                    <br />
                    <div className='project_img_caption'>
                        <p>                  
                            <em><strong>Branding Colour Guide</strong></em>
                            <br/>
                        </p>
                    </div> {/* /caption */}
                    <img className='project_img' src={ColourGuide} alt='colour guide' />
                    <br />
                    <br />
                    <br />
                </p>
                <h4><strong>USER RESEARCH</strong></h4>
                <p>
                    To better understand the audience we are targeting with Project Albert, we conducted a survey 
                    to obtain insight into what factors are considered prior to deciding upon renting or
                    purchasing a place. Our respondents consisted of University of Waterloo co-op <strong>students</strong> (who
                    are going into their co-op terms and are searching for places to live) and <strong>newcomers</strong> to the
                    Greater Toronto Area (GTA).
                    <br />
                    <br/>
                    Combining the results from this survey with information gathered through secondary research involving
                    newcomers, we came across the following key findings:
                    <br />
                    <br />
                    <Jumbotron className='highlight'>
                        <strong>1)</strong> The vast majority of newcomers and students alike do not have access to personal transport,
                        and thus value proximity to public transit - respondents both demographics have expressed willingness to forgo proximity
                        to work for the sake of being close to public transit.
                        <br />
                        <br />
                        <strong>2)</strong> Proximity to shopping centers is also of importance, albeit to a lesser degree in comparison
                        to public transit. Newcomers placed value on proximity to tourist attractions, while students gravitated towards
                        services such as fitness centers and hospitals.
                        <br />
                        <br />
                        <strong>3)</strong> Because newcomers and students are often running with tight budgets, renting/housing cost
                        is the most heavily weighed non-geographical factor when deciding on a place to live.
                    </Jumbotron>
                    <br />
                </p>
                <h4><strong>MOVING FORWARD</strong></h4>
                <p>
                    Our next steps involve modelling how a user might walk through the process of finding their optimal living location using
                    the application - we will also begin ideating how the application's layout and navigation might look like visually.
                </p>
            </div> {/* /project-body */}
        </main> {/* /project */}
        </>
    );
}
