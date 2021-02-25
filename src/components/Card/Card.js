import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card(props) {
    return (
        <div className='project_card'>
            <div className='card_text'>
                <h2>{props.title}</h2>
                <p>
                    <br />
                    {props.desc}
                    <br />
                    <br />
                    {props.children}
                    <br />
                    <br />
                    <Link to={props.path}>
                        <span className='active_link'>
                            <span class='bold'>VIEW CASE STUDY  →</span>
                        </span>
                    </Link>
                </p>
            </div>
            <Link to={props.path}>
                <img className='card_img' src={props.img} alt={props.alt} />
            </Link>
        </div>
    );
}
