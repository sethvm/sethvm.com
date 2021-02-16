import React from 'react';

export default function HTag5(props) {
    return(
        <h5>
            <span className='bold'>{props.children}</span>
            <br />
        </h5>
    );
}
