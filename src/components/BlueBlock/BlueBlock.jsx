import {
    useState,
    useEffect
} from 'react';
import { useLocation } from 'react-router-dom';
import blueBlockStyle from './BlueBlock.module.css';

export default function BlueBlock() {

    const [ screenWidth, setScreenWidth ] = useState(window.screen.width);

    const onDesktop = (screenWidth >= 992);

    const updateScreenWidth = () => {
        const newWidth = window.screen.width;
        setScreenWidth(newWidth);
    }

    // screen width change listener
    useEffect(() => {
        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        }
    }, [])

    // check if user is on home page and style accordingly
    const userOnHomePage = (useLocation().pathname === '/');
    const styleBlock = userOnHomePage
    ? 'animate__fadeInLeft'
    : `${blueBlockStyle.thin} animate__fadeInRight`;

    return (
        <>
        {onDesktop &&
            <div className={`${blueBlockStyle.default} animate__animated ${styleBlock}`} />
        }
        </>
    );
}
