import { v4 as uuidv4 } from 'uuid';
import sideBarStyle from './SideBar.module.css';
import { sideBarData } from './sideBarData';

export default function SideBar() {

    return (
        <nav
        id={sideBarStyle.sidebar}
        className='animate__animated animate__fadeIn'
        aria-label='contact links'>
            {sideBarData.map(sideBarItem => (
                <a key={uuidv4()}
                rel='noopener noreferrer'
                href={sideBarItem.href}
                target='_blank'>
                    <img className={sideBarStyle.itemLogo}
                    src={sideBarItem.img}
                    alt={sideBarItem.alt} />
                </a>
            ))}
        </nav>
    );
}
