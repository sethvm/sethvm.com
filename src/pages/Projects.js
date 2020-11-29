import React from 'react';
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom';
import '../styles/Project.css';

import AlbertCard from '../components/albert/albert-card.svg';
import FASSBCard from '../components/fassb/fassb-card.svg';
import SoulfxCard from '../components/soulfx/soulfx-card.svg';
import VisualsCard from '../components/visuals/visuals-card.svg';

export default function Projects() {

    return(
        <main className='project animated fadeIn'>
            <div className='project_body'>
                <h4><strong>PROJECTS</strong></h4>
                <p>
                    Work experience, passion projects and some occasional scribbles
                </p>
                <Card
                link='/soulfx'
                img={SoulfxCard}
                alt='Soulfx patient support application'
                title='PATIENT SUPPORT APP'
                desc='Bringing remote services to patients in need'>
                    <Badge pill variant='light'>Software / UX Design</Badge>&nbsp;
                    <Badge pill variant='light'>Information Architecture</Badge>
                </Card>
                <Card
                link='/albert'
                img={AlbertCard}
                alt='Project ALbert'
                title='PROJECT ALBERT'
                desc='Mitigating the stress of relocating'>
                    <Badge pill variant='light'>Branding</Badge>&nbsp;
                    <Badge pill variant='light'>UI / UX Design</Badge>
                </Card>
                <Card
                link='/fassb'
                img={FASSBCard}
                alt='FASSB UI/UX'
                title='FASSB UI/UX'
                desc='My first design internship in a nutshell'>
                    <Badge pill variant='light'>UI / UX Design</Badge>&nbsp;
                    <Badge pill variant='light'>Data Visualization</Badge>
                </Card>
                <Card
                link='/visuals'
                img={VisualsCard}
                alt='Visuals'
                title='VISUALS'
                desc='A collection of miscellaneous designs'>
                    <Badge pill variant='light'>Graphic Design</Badge>&nbsp;
                </Card>
            </div>
        </main>
    );
}

function Card(props) {
    return(
        <>
        <p>
            <br />
        </p>
        <Link to={props.link} className='card_link'>
            <div className='project_card'>
                <img className='card_img' src={props.img} alt={props.alt} />
                <div className='card_text'>
                    <h5><strong>{props.title}</strong></h5>
                    <p>
                        {props.desc}
                        <br />
                        <br />
                        {props.children}
                    </p>
                </div>
            </div>
        </Link>
        <p>
            <br />
        </p>
        </>
    );
}
