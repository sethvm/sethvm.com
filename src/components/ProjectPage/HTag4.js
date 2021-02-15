/*h4 tag wrapped in bold styling - for section title use*/
import React from 'react';

export default function HTag4(props) {
    return(
        <h4>
            <span className='bold'>{props.children}</span>
            <br />
        </h4>
    );
}
