// text component for use as project subheading

export default function SubHeading({ children }) {

    return (
        <span className='heavy' style={{ color: '#7C6900' }}>
            {children}
        </span>
    );
}
