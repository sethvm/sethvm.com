// text component for use as project subheading

export default function SubHeading({ children }) {

    return (
        <span className='bold' style={{ color: '#7C6900' }}>
            {children}
        </span>
    );
}
