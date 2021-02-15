import React from 'react';
import '../styles/NewProject.css';

export default function NewProject() {
    
    return(
        <main>
            <div className='project'>
                <div className='section'>
                    <h2>
                        <span className='bold'>Project Title</span>
                        <br />
                    </h2>
                    <p>
                        This is a pagagraph explaining an overview of the project.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eligendi non quis exercitationem culpa nesciunt nihil aut
                        nostrum explicabo reprehenderit optio amet ab temporibus
                        asperiores quasi cupiditate. Voluptatum ducimus voluptates
                        voluptas?
                        <br />
                    </p>
                    <p>
                        <span className='bold'>Team:</span>&nbsp;
                        2 Designers (including myself), Product Manager, OPS Portal Tech Team
                        <br />
                    </p>
                    <p>
                        <span className='bold'>Timeline:</span>&nbsp;
                        May 2020 - Aug 2020 (10 weeks)
                        <br />
                    </p>
                    <p>
                        <span className='bold'>Tools:</span>&nbsp;
                        Figma, Adobe XD
                        <br />
                    </p>
                </div>
                <div className='banner'>
                    banner div 
                </div>
                <div className='section'>
                    <h4>
                        <span className='bold'>Paragraph header</span>
                        <br />
                    </h4>
                    <p>
                        This is a pagagraph explaining a given phase of the project.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eligendi non quis exercitationem culpa nesciunt nihil aut
                        nostrum explicabo reprehenderit optio amet ab temporibus
                        asperiores quasi cupiditate. Voluptatum ducimus voluptates
                        voluptas?
                        <br />
                    </p>
                    <p>
                        <strong>• We highlight important questions asked using strong tags</strong>
                        <br />
                    </p>
                    <p>
                        <strong>• Or do we?</strong>
                        <br />
                    </p>
                    <p>
                        <strong>• But actually though?</strong>
                        <br />
                    </p>
                </div>
                <div className='images'>
                    <div>evenly</div>
                    <div>spaced</div>
                    <div>flexbox</div>
                </div>
            </div> {/* /project */}
        </main>
    );
}
