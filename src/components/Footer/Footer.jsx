import footerStyle from './Footer.module.css';

export default function Footer() {
    
    return (
        <footer id={footerStyle.footer} className='animate__animated animate__fadeIn'>
            <div className={footerStyle.text}>
                © 2019 - 2021 Seth Morenos
            </div>
        </footer>
    );
}
