import { useLocation } from 'react-router-dom';
import { useScreenWidth } from '../customHooks/useScreenWidth';
import blueBlockStyle from './BlueBlock.module.css';

export default function BlueBlock() {

    const screenWidth = useScreenWidth();

    // check if user is on home page and style accordingly
    const userOnHomePage = (useLocation().pathname === '/');
    const styleBlock = userOnHomePage
    ? 'animate__fadeInLeft'
    : `${blueBlockStyle.thin} animate__fadeInRight`;

    return (
        <>
        {(screenWidth >= 992) &&
            <div className={`${blueBlockStyle.default} animate__animated ${styleBlock}`} />
        }
        </>
    );
}
