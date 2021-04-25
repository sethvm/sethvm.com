// a container for highlighting text inside sections
// - place within the same tier as paragraphs
import indentInnerStyle from './IndentInner.module.css';

export default function IndentInner({ nobar, children }) {

    const borderStyle = nobar ? indentInnerStyle.borderless : indentInnerStyle.bordered
    
    return (
        <div className={`animate__animated animate__fadeIn
        ${indentInnerStyle.container}
        ${borderStyle}`}>
            {children}
        </div>
    );
}
