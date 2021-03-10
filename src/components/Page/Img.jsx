// image component with a loading state
import React, { Suspense } from 'react';
import './Img.css';
import LoadingIcon from '../LoadingState/LoadingIcon';

export default function Image({ src, alt }) {
    return (
        <Suspense fallback={<LoadingIcon />}>
            <img className='image_item' src={src} alt={alt} />
        </Suspense>
    );
}
