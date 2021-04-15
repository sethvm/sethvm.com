// image component
import imgStyle from './Img.module.css';

export default function Image(props) {

    const isItem = props.item ? imgStyle.item : '';
    const isScreen = props.screen ? imgStyle.screen : '';

    return (
        <img
        className={`${imgStyle.image} ${isItem} ${isScreen}`}
        src={props.src}
        alt={props.alt} />
    );
}
