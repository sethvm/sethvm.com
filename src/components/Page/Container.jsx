// ultrawide container
export default function Container({ children }) {

    const styleContainer = {
        maxWidth: 1920,
        margin: '0 auto',
        padding: 0
    }
    
    return (
        <div id='page-content' style={styleContainer}>
            {children}
        </div>
    );
}
