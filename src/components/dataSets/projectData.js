// card images
import Loblaw from '../../assets/loblaw/loblaw-card.svg';
import Soulfx from '../../assets/soulfx/soulfx-card.svg';
import FASSB from '../../assets/fassb/fassb-card.svg';

// project card and quicklink properties
export const projectData = [
    {
        heading: 'Order Pick History',
        subHeadings: [
            'Product Design'
        ],
        description: "Creating a streamlined order validation experience for Canada's largest grocery retailer",
        img: Loblaw,
        alt: 'OPS Pick History',
        link: 'View case study →',
        quickLinkLabel: 'Loblaw',
        url: '/order-pick-history'
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
        link: 'View case study →',
        quickLinkLabel: 'Soulfx',
        url: '/patient-support-app'
    },
    {
        heading: 'Employment Services Transformation',
        subHeadings: [
            'Web Design'
        ],
        description: "Supporting Employment Ontario's push towards improving provincial employment retention",
        img: FASSB,
        alt: 'Employment Services Transformation',
        link: 'View term recap →',
        quickLinkLabel: 'FASSB',
        url: '/employment-services-transformation'
    }
]
