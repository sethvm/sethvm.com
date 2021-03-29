// image component
import './Img.css';

export default function Image({ item, src, alt }) {

    const styleImg = item ? 'item' : null;

    return (
        <img className={`image ${styleImg}`} src={src} alt={alt} />
    );
}
