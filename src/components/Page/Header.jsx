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

    return Header[index](children);
}
