import {
    useState,
    useEffect
} from 'react';

export function useScreenWidth() {

    const [ screenWidth, setScreenWidth ] = useState(window.screen.width);

    const updateScreenWidth = () => {
        setScreenWidth(window.screen.width);
    }

    // screen width change listener
    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        }
    }, [])

    return screenWidth;
}
