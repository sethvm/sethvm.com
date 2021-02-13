import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card(props) {
    return (
        <div className='project_card'>
            <div className='card_text'>
                <h2><strong>{props.title}</strong></h2>
                <p>
                    <br />
                    {props.desc}
                    <br />
                    <br />
                    {props.children}
                    <br />
                    <br />
                    <Link to={props.link}>
                        <strong>{props.linkPrompt}</strong>
                    </Link>
                </p>
            </div>
            <Link to={props.link}>
                <img className='card_img' src={props.img} alt={props.alt} />
            </Link>
        </div>
    );
}
