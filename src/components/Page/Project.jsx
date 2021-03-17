// wrapper for every project page component
import './Project.css';

export default function Project({ children }) {
    return (
        <div className='project'>
            {children}
        </div>
    );
}
