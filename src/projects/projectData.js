// card images
import Loblaw from '../assets/loblaw/loblaw-card.svg';
import Soulfx from '../assets/soulfx/soulfx-card.svg';
//import FASSB from '../assets/fassb/fassb-card.svg';

// project card and quicklink properties
export const projectData = [
    {
        heading: 'Ops Pick History',
        subHeadings: [
            'Product Design'
        ],
        description: "Crafting a renewed order validation experience for Canada's largest grocery retailer",
        img: Loblaw,
        alt: 'OPS Pick History',
        cardLink: 'View case study →',
        quickLinkLabel: 'Loblaw',
        url: '/ops-pick-history'
    },
    {
        heading: 'Patient Support App',
        subHeadings: [
            'Software Design',
            'UX Design'
        ],
        description: "Facilitating the remote operation of a client's patient support service",
        img: Soulfx,
        alt: 'Patient Support App',
        cardLink: 'View case study →',
        quickLinkLabel: 'Soulfx',
        url: '/patient-support-app'
    },
    /*{
        heading: 'Employment Services Transformation',
        subHeadings: [
            'Web Design'
        ],
        description: "Supporting Employment Ontario's push towards improving provincial employment retention",
        img: FASSB,
        alt: 'Employment Services Transformation',
        cardLink: 'View term recap →',
        quickLinkLabel: 'FASSB',
        url: '/employment-services-transformation'
    }*/
]
