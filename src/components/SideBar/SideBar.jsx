import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './SideBar.css';

// sidebar item logos
import ContactLogo from './contact-logo.svg';
import LinkedInLogo from './linkedin-logo.svg';
import ResumeLogo from './resume-logo.svg';

// files
import ResumeFile from '../../pdf/sethvm_resume.pdf';

function SideBarItems() {

    // sidebar items to render
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
            alt: 'resume'
        }
    ]
    return sideBarItems;
}

export default function RenderSideBar() {

    return (
        <div className='sidebar animate__animated animate__fadeIn'>
            {SideBarItems().map((sideBarItem) => (
                <Fragment key={uuidv4()}>
                    <SideBarItem
                    href={sideBarItem.href}
                    img={sideBarItem.img}
                    alt={sideBarItem.alt} />
                </Fragment>
            ))}
        </div>
    );
}

function SideBarItem({ href, img, alt }) {
    return (
        <a rel='noopener noreferrer' href={href} target='_blank'>
            <img src={img} alt={alt} className='sidebar-item' />
        </a>
    );
}
