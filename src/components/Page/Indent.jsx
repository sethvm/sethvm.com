// A variant of the Section component
// - use to highlight important quotes
// - utilize larger text
import indentStyle from './Indent.module.css';

export default function Indent({ children }) {
    
    return (
        <div className={`${indentStyle.container} animate__animated animate__fadeIn`}>
            {children}
        </div>
    );
}
