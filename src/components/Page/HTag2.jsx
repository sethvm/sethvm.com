// h2 tag wrapped in bold styling - for use with project titles
import React from 'react';

export default function HTag2({ children }) {
    return(
        <h2>
            {children}
            <br />
        </h2>
    );
}
