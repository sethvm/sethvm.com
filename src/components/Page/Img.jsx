// image component
import imgStyle from './Img.module.css';

export default function Image({ item, src, alt }) {

    const isItem = item ? imgStyle.item : null;

    return (
        <img className={`${imgStyle.image} ${isItem}`} src={src} alt={alt} />
    );
}
