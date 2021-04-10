// ultrawide container
export default function Container({ children }) {

    const styleContainer = {
        width: '100%',
        maxWidth: 1920,
        margin: '0 auto',
        padding: 0
    }
    
    return (
        <div className='content' style={styleContainer}>
            {children}
        </div>
    );
}
