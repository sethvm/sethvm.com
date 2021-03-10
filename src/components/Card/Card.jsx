import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ title, desc, path, img, alt, children }) {
    return (
        <div className='project_card'>
            <div className='card_text'>
                <h2>{title}</h2>
                <p>
                    <br />
                    {desc}
                    <br />
                    <br />
                    {children}
                    <br />
                    <br />
                    <Link to={path}>
                        <span className='active_link'>
                            <span className='bold'>VIEW CASE STUDY  →</span>
                        </span>
                    </Link>
                </p>
            </div>
            <Link to={path}>
                <img className='card_img' src={img} alt={alt} />
            </Link>
        </div>
    );
}
