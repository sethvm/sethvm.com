// card component for project previews on homepage
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card(props) {
    
    return (
        <div className='project-card'>
            <div className='card-text'>
                <h2>{props.heading}</h2>
                {props.children}
                <p>
                    <br />
                    {props.description}
                    <br />
                    <br />
                    <Link to={props.url}>
                        <span className='active-link'>
                            <span className='heavy'>{props.link}</span>
                        </span>
                    </Link>
                </p>
            </div>
            <Link to={props.url}>
                <img className='card-img'
                src={props.img}
                alt={props.alt} />
            </Link>
        </div>
    );
}
