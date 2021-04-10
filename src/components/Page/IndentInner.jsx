// a container for highlighting text inside sections
// - place within the same tier as paragraphs
import indentInnerStyle from './IndentInner.module.css';

export default function IndentInner({ children }) {
    
    return (
        <div className={`${indentInnerStyle.container} animate__animated animate__fadeIn`}>
            {children}
        </div>
    );
}
