import React from 'react';

import './Project.css';
import TopShortcut from './TopShortcut';

import Banner from './albert/banner_albert.svg';
import Ideation from './albert/logo-ideation_albert.png';
import PlainLogo from './albert/plain-logo_albert.svg';
import ColourGuide from './albert/colour-guide_albert.svg';

export default function Albert() {
    return(
        <div class='project animated fadeIn'>
            <img class='proj_banner' src={Banner} alt={'project albert'} />   
            <div class='proj_txt'>
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
                    <strong>Seth Morenos - Designer</strong>
                    <br />Branding, wireframing, conducting user research
                    <br />
                    <strong>Jonathan Ho - Developer</strong>
                    <br />Implementing application frontend and backend
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
                <h4><strong>USERS & AUDIENCE</strong></h4>
                <p>
                    Anyone with the intent of finding a living location in a new city for work falls within our
                    target group. However, our primary audience for this project are University of Waterloo students
                    going into a co-op term who are searching for places to live.
                    <br />
                    <br />
                </p>
                <h4><strong>USER RESEARCH</strong></h4>
                <p>
                    To better define the objective of Project Albert as an application, we are conducting surveys 
                    to obtain insight into what geographical factors are considered prior to deciding upon renting 
                    or purchasing a place.
                    <br />
                    <br />
                    Secondary research focusing on general newcomers yielded the following factors as the most heavily
                    weighted:
                    <br />
                    <br />
                    <strong>•</strong> Proximity to public transit
                    <br />
                    <strong>•</strong> Proximity to shopping centers
                    <br />
                    <strong>•</strong> Proximity to tourist attractions
                    <br />
                    <br />
                    We are using a 5-point Likert scale to obtain a quantitative measurement of how much weighting is 
                    applied to each respective factor (i.e. how heavily it influences the decision to move to a given
                    location). Additionally, we intend to deduce if there are other potential factors that influence 
                    the weightings associated with each factor. Thus, we follow-up with questions regarding:
                    <br />
                    <br />
                    <strong>•</strong> Trade-off between proximity to transit and proximity to workplace
                    <br />
                    <strong>•</strong> Access to personal transportation
                    <br />
                    <strong>•</strong> Trade-off between rent/housing prices and crime rate
                    <br />
                    <br />
                    An optional short-answer question is included at the end of the survey to provide an opportunity for
                    respondents to mention other factors they consider that are not present in the previous questions.
                    <br />
                    <br />
                </p>
                <h4><strong>BRANDING</strong></h4>
                <p>
                    With every product comes a branding identity that enables it to stand out.
                    <br />
                    <br />
                    Because Project Albert is an application that provides assistance with finding residence options,
                    I wanted to create a logo that symbolizes the location of a household combined with some form of
                    mapping-related visual. Furthermore, I wanted this logo to be flat and easily recognizable.
                    <br />
                    <br />
                    I have found during ideation that the letters P and A could be manipulated such that P resembles a
                    map marker and A resembles a house, and iterated my design as such.
                    <br />
                    <img class='proj_img' src={Ideation} alt={'logo ideation'} />
                    <br />
                    The final iteration sketch (the rightmost logo pictured above) was then created in Figma, where I proceeded
                    to experiment some more with the volume and geometry of each symbol. Fine-tuning the gap and notch on the
                    letter A allowed me to create structures resembling a window and a door, respectively. After making more design 
                    changes to balance out the volume filled by each shape, the finalized logo (below) is eventually finished.
                    <br />
                    <img class='proj_img' src={PlainLogo} alt={'plain logo'} />
                    <br />
                    The logo palettes have been chosen
                    following Google's Material Design guidelines, coming in both dark and light variants. The shades
                    of blue represent the relief and calm that newcomers feel upon locating or securing a new home, while
                    the red and orange embody the warmth and security provided by shelter.
                    <br />
                    <br />
                    <img class='proj_img' src={ColourGuide} alt={'colour guide'} />
                    <br />
                </p>
            </div>
            <div class='proj_txt'>
                <TopShortcut />
            </div>
        </div>
    );
}
