// h4 tag wrapped in bold styling - use for highlighting body text
import React from 'react';

export default function HTag4(props) {
    return(
        <h4>
            {props.children}
            <br />
        </h4>
    );
}
