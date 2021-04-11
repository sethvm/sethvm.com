import { useLocation } from 'react-router-dom';
import blueBlockStyle from './BlueBlock.module.css';

export default function BlueBlock({ screenWidth }) {

    const onDesktop = (screenWidth >= 992);

    // check if user is on home page and style accordingly
    const userOnHomePage = (useLocation().pathname === '/');
    const styleBlock = userOnHomePage
    ? 'animate__fadeInLeft'
    : `${blueBlockStyle.thin} animate__fadeInRight`;

    return (
        <>
        {(onDesktop)
            &&
            <div className={`${blueBlockStyle.default} animate__animated ${styleBlock}`} />
        }
        </>
    );
}
