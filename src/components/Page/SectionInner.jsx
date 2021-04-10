// a variant of Section.js for use inside other containers
import sectionInnerStyle from './SectionInner.module.css';

export default function SectionInner({ children }) {
    
    return (
        <div className={sectionInnerStyle.container}>
            {children}
        </div>
    );
}
