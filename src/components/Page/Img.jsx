// image component
import './Img.css';

export default function Image({ item, src, alt }) {
    return (
        <>
        {item
            ? <img className='image item' src={src} alt={alt} />
            : <img className='image' src={src} alt={alt} />
        }
        </>
    );
}
