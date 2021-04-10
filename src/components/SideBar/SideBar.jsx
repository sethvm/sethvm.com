import { v4 as uuidv4 } from 'uuid';
import sideBarStyle from './SideBar.module.css';

// sidebar item logos
import ContactLogo from './contact-logo.svg';
import LinkedInLogo from './linkedin-logo.svg';
import ResumeLogo from './resume-logo.svg';

// files
import ResumeFile from '../../pdf/sethvm_resume.pdf';

export default function SideBar() {

    // items to render
    const sideBarItems = [
        {
            href: 'https://www.linkedin.com/in/sethvm',
            img: LinkedInLogo,
            alt: 'linkedin.com/in/sethvm'
        },
        {
            href: 'mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca',
            img: ContactLogo,
            alt: 'sethvm64@gmail.com'
        },
        {
            href: ResumeFile,
            img: ResumeLogo,
            alt: 'résumé'
        }
    ]

    return (
        <nav
        id={sideBarStyle.sidebar}
        className='animate__animated animate__fadeIn'
        aria-label='contact links'>
            {sideBarItems.map(sideBarItem => (
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
