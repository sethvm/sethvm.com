/*h3 tag wrapped in bold styling - for section title use*/
import React from 'react';

export default function HTag3(props) {
    return(
        <h3>
            <span className='bold'>{props.children}</span>
            <br />
        </h3>
    );
}
