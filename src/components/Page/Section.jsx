// for containing header-paragraph segments
import './Section.css';

export default function Section({ children }) {
    
    return (
        <div className='section animate__animated animate__fadeIn'>
            {children}
        </div>
    );
}
