// flexbox container for displaying an image(s)
import imgFluidStyle from './ImgFluid.module.css';

export default function ImgFluid({ children }) {
    
    return (
        <div className={imgFluidStyle.container}>
            {children}
        </div>
    );
}
