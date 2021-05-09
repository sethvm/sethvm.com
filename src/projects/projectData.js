// card images
import Loblaw from '../assets/loblaw/loblaw-card.svg';
import Soulfx from '../assets/soulfx/soulfx-card.svg';

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
            'Software Design'
        ],
        description: "Facilitating the remote operation of a client's patient support service",
        img: Soulfx,
        alt: 'Patient Support App',
        cardLink: 'View case study →',
        quickLinkLabel: 'Soulfx',
        url: '/patient-support-app'
    }
]
