// wrapper for every project page component
import projectStyle from './Project.module.css';

export default function Project({ children }) {
    
    return (
        <main className={projectStyle.container}>
            {children}
        </main>
    );
}
