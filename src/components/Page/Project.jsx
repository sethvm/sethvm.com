// wrapper for every project page component
import './Project.css';

export default function Project({ children }) {
    return (
        <main className='project'>
            {children}
        </main>
    );
}
