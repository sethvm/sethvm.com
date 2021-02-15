/*h2 tag wrapped in bold styling - for use with project title*/
import React from 'react';

export default function HTag2(props) {
    return(
        <h2>
            <span className='bold'>{props.children}</span>
            <br />
        </h2>
    );
}
