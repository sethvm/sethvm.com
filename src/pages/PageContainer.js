import React from 'react';

export default function PageContainer(props) {
    return (
        <div className='project_content'>
            {props.children}
        </div>
    );
}
