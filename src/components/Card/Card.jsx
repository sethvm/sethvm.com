// card component for project previews on homepage
import { Link } from 'react-router-dom';
import cardStyle from './Card.module.css';

export default function Card(props) {
    
    return (
        <div className={cardStyle.container}>
            <div className={cardStyle.text}>
                <h2>{props.heading}</h2>
                {props.children}
                <p>
                    <br />
                    {props.description}
                    <br />
                    <br />
                    <Link to={props.url}>
                        <span className='activeLink'>
                            <span className='heavy'>{props.link}</span>
                        </span>
                    </Link>
                </p>
            </div>
            <Link to={props.url}>
                <img className={cardStyle.image}
                src={props.img}
                alt={props.alt} />
            </Link>
        </div>
    );
}
