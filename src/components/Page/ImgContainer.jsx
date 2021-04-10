// jumbotron-like component
// - use as container to highlight the most important sections
import imgContainerStyle from './ImgContainer.module.css';

export default function ImgContainer({ clear, children }) {

    const isClearContainer = clear
    ? imgContainerStyle.clear
    : imgContainerStyle.glass;

    return (
        <div
        className={`${imgContainerStyle.container} ${isClearContainer} animate__animated animate__fadeIn`}>
            {children}
        </div>
    );
}
