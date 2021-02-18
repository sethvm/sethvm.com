import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card(props) {
    return (
        <div className='project_card'>
            <div className='card_text'>
                <h2><span class='bold'>{props.title}</span></h2>
                <p>
                    <br />
                    {props.desc}
                    <br />
                    <br />
                    {props.children}
                    <br />
                    <br />
                    <Link to={props.link}>
                        <span className={props.status}>
                            <span class='bold'>{props.linkPrompt}</span>
                        </span>
                    </Link>
                </p>
            </div>
            <Link to={props.link}>
                <img className='card_img' src={props.img} alt={props.alt} />
            </Link>
        </div>
    );
}
