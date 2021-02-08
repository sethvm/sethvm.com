import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Section(props) {
    return(
        <div className='project_card'>
            {props.children}
            <Link to={props.link}>
                <img className='card_img' src={props.img} alt={props.alt} />
            </Link>
        </div>
    );
}
