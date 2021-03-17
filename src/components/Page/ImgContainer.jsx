// jumbotron-like component
// - use as container to highlight the most important sections
import './ImgContainer.css';

export default function ImgContainer({ clear, children }) {
    return (
        <>
        {clear
            ?
            <div
            className='clear image_container animate__animated animate__fadeIn'>
                {children}
            </div>
            :
            <div
            className='glass image_container animate__animated animate__fadeIn'>
                {children}
            </div>
        }
        </>
    );
}
