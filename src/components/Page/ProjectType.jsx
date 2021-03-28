// text component for use as project subheader

export default function ProjectType({ children }) {

    const colorOlive = {
        color: '#7C6900'
    };

    return (
        <span className='bold' style={colorOlive}>
            {children}
        </span>
    );
}
