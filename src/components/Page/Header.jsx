// dynamic header component

export default function RenderHeader({ type, children }) {

    const Header = [
        function(children) {
            return (
                <h2>
                    {children}
                </h2>
            );
        },
        function(children) {
            return (
                <h3>
                    {children}
                </h3>
            );
        },
        function(children) {
            return (
                <h4>
                    {children}
                </h4>
            );
        }
    ]

    const index = (type - 2);

    // fallback render if provided type value is invalid/null
    if (!Header[index]) {
        return Header[0](children);
    }

    return Header[index](children);
}
