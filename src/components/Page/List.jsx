//list component
import listStyles from './List.module.css';

export default function List({ unBulleted, children }) {

    const noBullets = unBulleted ? listStyles.noBullets : '';

    return (
        <ul className={noBullets}>
            {children}
        </ul>
    );
}
