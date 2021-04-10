// dynamic heading component

export default function Heading({ type, weight, children }) {

    const HeadingType = [
        () => { return <h1 className={`${weight}`}>{children}</h1> },
        () => { return <h2 className={`${weight}`}>{children}</h2> },
        () => { return <h3 className={`${weight}`}>{children}</h3> },
        () => { return <h4 className={`${weight}`}>{children}</h4> }
    ]

    const index = (type - 1);

    // fallback render if provided type value is invalid/null
    if (!HeadingType[index]) {
        return HeadingType[0]();
    }

    return HeadingType[index]();
}
