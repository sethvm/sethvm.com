// sidebar item logos
import ContactLogo from './contact-logo.svg';
import LinkedInLogo from './linkedin-logo.svg';
import ResumeLogo from './resume-logo.svg';

// resume
import Resume from '../../pdf/sethvm_resume.pdf';

export const sideBarData = [
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
        href: Resume,
        img: ResumeLogo,
        alt: 'résumé'
    }
]
