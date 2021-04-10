// a variant of Section.js for use inside other containers
import './SectionInner.css';

export default function SectionInner({ children }) {
    
    return (
        <div className='section_inner'>
            {children}
        </div>
    );
}
