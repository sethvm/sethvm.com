// A variant of the Section component
// - use to highlight important quotes
// - utilize larger text
import './Indent.css';

export default function Indent({ children }) {
    
    return (
        <div className='indent animate__animated animate__fadeIn'>
            {children}
        </div>
    );
}
