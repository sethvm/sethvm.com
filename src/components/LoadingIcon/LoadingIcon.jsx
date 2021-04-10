import ldsStyle from './LoadingIcon.module.css';

export default function LoadingIcon() {
    return (
        <div className={ldsStyle.container}>
            <div className={ldsStyle.ring}><div></div><div></div><div></div><div></div></div>
        </div>
    );
}
