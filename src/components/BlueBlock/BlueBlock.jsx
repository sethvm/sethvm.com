import { useLocation } from 'react-router-dom';
import './BlueBlock.css';

export default function BlueBlock() {

    // check if user is on home page and style accordingly
    const userOnHomePage = (useLocation().pathname === '/');
    const styleBlock = userOnHomePage
        ? 'animate__animated animate__fadeInLeft'
        : 'thin animate__animated animate__fadeInRight';

    return (
        <span className={`block-blue ${styleBlock}`} />
    );
}
