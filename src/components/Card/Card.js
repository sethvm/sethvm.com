import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card(props) {
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
