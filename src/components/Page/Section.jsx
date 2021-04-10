// for containing header-paragraph segments
import sectionStyle from './Section.module.css';

export default function Section({ children }) {
    
    return (
        <div className={`${sectionStyle.container} animate__animated animate__fadeIn`}>
            {children}
        </div>
    );
}
