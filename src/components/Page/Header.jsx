// dynamic header text component

export default function Header({ type, children }) {

    const HeaderType = [
        () => { return <h1>{children}</h1> },
        () => { return <h2>{children}</h2> },
        () => { return <h3>{children}</h3> },
        () => { return <h4>{children}</h4> }
    ]

    const index = (type - 1);

    // fallback render if provided type value is invalid/null
    if (!HeaderType[index]) {
        return HeaderType[0](children);
    }

    return HeaderType[index](children);
}
