// sidebar item logos
import LinkedInLogo from './linkedin-logo.svg';
import ContactLogo from './contact-logo.svg';
import ResumeLogo from './resume-logo.svg';

// files
import ResumeFile from './../../pdf/sethvm_resume.pdf';

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
        href: ResumeFile,
        img: ResumeLogo,
        alt: 'Resumé'
    }
]
