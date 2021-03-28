// text component for use as project subheading

export default function SubHeading({ children }) {

    const colorOlive = {
        color: '#7C6900'
    };

    return (
        <span className='bold' style={colorOlive}>
            {children}
        </span>
    );
}
