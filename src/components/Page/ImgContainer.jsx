// jumbotron-like component
// - use as container to highlight the most important sections
import './ImgContainer.css';

export default function ImgContainer({ clear, children }) {

    const styleImgContainer = clear ? 'clear' : 'glass';

    return (
        <div
        className={`${styleImgContainer} img_container animate__animated animate__fadeIn`}>
            {children}
        </div>
    );
}
