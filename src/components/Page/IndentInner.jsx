// a container for highlighting text inside sections
// - place within the same tier as paragraphs
import './IndentInner.css';

export default function IndentInner({ children }) {
    return (
        <div className='indent_inner animate__animated animate__fadeIn'>
            {children}
        </div>
    );
}
