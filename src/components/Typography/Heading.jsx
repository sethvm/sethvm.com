// dynamic header text component

export default function Heading({ type, children }) {

    const HeadingType = [
        () => { return <h1>{children}</h1> },
        () => { return <h2>{children}</h2> },
        () => { return <h3>{children}</h3> },
        () => { return <h4>{children}</h4> }
    ]

    const index = (type - 1);

    // fallback render if provided type value is invalid/null
    if (!HeadingType[index]) {
        return HeadingType[0]();
    }

    return HeadingType[index]();
}
