// A variant of the Section component
// - use in about page
// - utilize larger text
import './IndentNoBar.css';

export default function Indent({ children }) {
    return (
        <div className='indent_nobar animate__animated animate__fadeIn'>
            {children}
        </div>
    );
}
