// h3 tag wrapped in bold styling - use to title sections
import React from 'react';

export default function HTag3(props) {
    return(
        <h3>
            {props.children}
            <br />
        </h3>
    );
}
