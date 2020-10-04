import React from 'react';
import '../styles/Project.css';

export default function Soulfx() {

    return(
        <>
        <main className='project animated fadeIn'>
            <img className='project_banner' src={null} alt='banner goes here' />
            <div className='project_body'>
                <h4><strong>OVERVIEW</strong></h4>
                <p>
                    [Overview section here]
                    <br />
                    <br />
                </p>
                <h4><strong>TEAM + PROJECT</strong></h4>
                <p>
                    [team and project text section here]
                    <br />
                    <br />
                </p>
                <h4><strong>DESIGN PROCESS</strong></h4>
                <p>
                    [design process section here]
                    <br />
                    <br />
                </p>
                <h4><strong>TAKEAWAYS</strong></h4>
                <p>
                    [takeaway section here]
                </p>
            </div> {/* /project-body */}
        </main> {/* /project */}
        </>
    );
}
