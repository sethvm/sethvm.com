// text component for use as project subheader

export default function ProjectType({ children }) {

    const typeColor = {
        color: '#7C6900'
    };

    return (
        <span className='bold' style={typeColor}>
            {children}
        </span>
    );
}
