// for providing brief image descriptions
// - place at the bottom of each image
import imgCaptionStyle from './ImgCaption.module.css';

export default function ImgCaption({ children }) {
    
    return (
        <div className={imgCaptionStyle.caption}>
            <p>
                <span className='italic'>{children}</span>
            </p>
        </div>
    );
}
