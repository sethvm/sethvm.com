// project banner
import bannerStyle from './Banner.module.css';

export default function Banner({ img, alt }) {
    
    return (
        <div className={`${bannerStyle.container} animate__animated animate__fadeIn`}>
            <img className={bannerStyle.image} src={img} alt={alt} />
        </div>
    );
}
