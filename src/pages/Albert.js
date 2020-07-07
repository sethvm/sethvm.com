import React from 'react';
import '../components/Project.css';

import Banner from '../components/albert/banner_albert.svg';
import Ideation from '../components/albert/logo-ideation_albert.png';
import PlainLogo from '../components/albert/plain-logo_albert.svg';
import ColourGuide from '../components/albert/colour-guide_albert.svg';

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
                    It aims to alleviate relocation stress by providing map-based visuals of renting options,
                    commute routes to their new workplace, and available services - all within a single map.
                    <br />
                    <br />
                </p>
                <h4><strong>TEAM</strong></h4>
                <p>
                    <strong>Seth Morenos</strong> - Designer
                    <br />
                    <strong>Jonathan Ho</strong> - Developer
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
                </p>
                <h4><strong>USER RESEARCH</strong></h4>
                <p>
                    To better understand the audience we are targeting with Project Albert, we conducted a survey 
                    to obtain insight into what factors are considered prior to deciding upon renting or
                    purchasing a place. Our respondents consisted of University of Waterloo co-op students (who
                    are going into their co-op terms and are searching for places to live) and newcomers to the
                    Greater Toronto Area (GTA).
                    <br />
                    <br/>
                    Combining the results from this survey with information gathered through secondary research involving
                    newcomers, we came across the following key findings:
                    <br />
                    <br />
                    <strong>1.</strong> The vast majority of newcomers and students alike do not have access to personal transport,
                    and thus value proximity to public transit - respondents both demographics have even expressed willingness to forgo proximity
                    to work for the sake of being close to public transit.
                    <br />
                    <br />
                    <strong>2.</strong> Proximity to shopping centers is also of importance, albeit to a lesser degree in comparison
                    to public transit. Newcomers placed value on proximity to tourist attractions, while students gravitated towards
                    services such as fitness centers and hospitals.
                    <br />
                    <br />
                    <strong>3.</strong> Because newcomers and students are often running with tight budgets, renting/housing cost
                    is the most heavily weighed non-geographical factor when deciding on a place to live.
                    <br />
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
                    from a house highlighted with a map marker, resembling the letters A and P respectively.
                    <br />
                    <img className='project_img' src={Ideation} alt='logo ideation' />
                    <br />
                    <br />
                    Fine-tuning the gap and notch on the letter A allowed me to create structures resembling a window 
                    and a door. After making more design changes to balance out the volume filled by each 
                    shape, the finalized logo (below) is eventually finished.
                    <br />
                    <img className='project_img' src={PlainLogo} alt='plain logo' />
                    <br />
                    The colour palettes have been chosen
                    following Google's Material Design guidelines, coming in both dark and light variants. The shades
                    of blue represent the relief and calm that newcomers feel upon locating or securing a new home, while
                    the red and orange embody the warmth and security provided by shelter.
                    <br />
                    <br />
                    <img className='project_img' src={ColourGuide} alt='colour guide' />
                </p>
            </div> {/* /project-body */}
        </main> {/* /project */}
        </>
    );
}
