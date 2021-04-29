// A variant of the Section component
// - use to highlight important quotes
// - utilize larger text
import indentStyle from './Indent.module.css';

export default function Indent({ nobar, children }) {

    const borderStyle = nobar ? indentStyle.borderless : indentStyle.bordered
    
    return (
        <div className={`animate__animated animate__fadeIn
        ${indentStyle.container}
        ${borderStyle}`}>
            {children}
        </div>
    );
}
